import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

// Force dynamic so Supabase isn't called at build time
export const dynamic = 'force-dynamic'

function generateReferralCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
  let code = ''
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabase()
    const { email, agentInterests, referredBy } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    // Check if already signed up
    const { data: existing } = await supabase
      .from('waitlist')
      .select('position, referral_code')
      .eq('email', email)
      .single()

    if (existing) {
      return NextResponse.json({
        position: existing.position,
        referralCode: existing.referral_code,
        alreadyExists: true,
      })
    }

    // Get current count for position
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    const position = 41 + (count || 0) // starts at 41 (display offset of 40)
    const referralCode = generateReferralCode()

    const { error } = await supabase.from('waitlist').insert({
      email,
      position,
      referral_code: referralCode,
      referred_by: referredBy || null,
      agent_interests: agentInterests || [],
    })

    if (error) {
      if (error.code === '23505') {
        const { data: existingRetry } = await supabase
          .from('waitlist')
          .select('position, referral_code')
          .eq('email', email)
          .single()
        return NextResponse.json({
          position: existingRetry?.position,
          referralCode: existingRetry?.referral_code,
          alreadyExists: true,
        })
      }
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
    }

    // If referred by someone, update their position (move up 5 spots)
    if (referredBy) {
      const { data: referrer } = await supabase
        .from('waitlist')
        .select('position')
        .eq('referral_code', referredBy)
        .single()

      if (referrer && referrer.position > 5) {
        await supabase
          .from('waitlist')
          .update({ position: referrer.position - 5 })
          .eq('referral_code', referredBy)
      }
    }

    return NextResponse.json({
      position,
      referralCode,
      alreadyExists: false,
    })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const supabase = getSupabase()
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    return NextResponse.json({ count: 40 + (count || 0) })
  } catch {
    return NextResponse.json({ count: 40 })
  }
}
