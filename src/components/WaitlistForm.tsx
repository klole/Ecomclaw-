'use client'

import { useState } from 'react'

interface WaitlistFormProps {
  selectedAgents?: string[]
  referralCode?: string
  compact?: boolean
  onSuccess?: (data: { position: number; referralCode: string }) => void
}

export default function WaitlistForm({
  selectedAgents = [],
  referralCode,
  compact = false,
  onSuccess,
}: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          agentInterests: selectedAgents,
          referredBy: referralCode,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong')
        return
      }

      onSuccess?.({
        position: data.position,
        referralCode: data.referralCode,
      })
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'w-full' : 'w-full max-w-md mx-auto'}>
      <div className={`flex ${compact ? 'flex-row' : 'flex-col sm:flex-row'} gap-3`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="glow-input flex-1 px-5 py-3.5 bg-card-bg border border-card-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-accent text-base"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3.5 bg-accent hover:bg-accent-glow text-white font-semibold rounded-xl transition-all duration-200 pulse-glow disabled:opacity-50 disabled:animate-none whitespace-nowrap text-base"
        >
          {loading ? 'Joining...' : 'Join the Waitlist'}
        </button>
      </div>
      {error && <p className="mt-3 text-red-600 text-sm">{error}</p>}
    </form>
  )
}
