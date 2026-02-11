'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { agents } from '@/lib/agents'
import AgentCard from '@/components/AgentCard'
import FAQ from '@/components/FAQ'
import SuccessModal from '@/components/SuccessModal'

function LandingPage() {
  const searchParams = useSearchParams()
  const refCode = searchParams.get('ref')
  const preselect = searchParams.get('agent')

  const [selectedAgents, setSelectedAgents] = useState<string[]>(
    preselect ? [preselect] : []
  )
  const [email, setEmail] = useState('')
  const [waitlistCount, setWaitlistCount] = useState(40)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successData, setSuccessData] = useState<{
    position: number
    referralCode: string
  } | null>(null)

  // Typewriter effect
  const problems = [
    'Wasting ad spend on campaigns that don\'t convert.',
    'Missing product trends your competitors catch first.',
    'Losing 70% of carts because nobody follows up.',
  ]
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    fetch('/api/waitlist')
      .then((r) => r.json())
      .then((d) => { if (d.count) setWaitlistCount(d.count) })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const problem = problems[currentProblemIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < problem.length) {
      timeout = setTimeout(() => setDisplayText(problem.slice(0, displayText.length + 1)), 40)
    } else if (!isDeleting && displayText.length === problem.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 20)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setCurrentProblemIndex((i) => (i + 1) % problems.length)
    }

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, currentProblemIndex])

  function toggleAgent(slug: string) {
    setSelectedAgents((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

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
          referredBy: refCode,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong')
        return
      }
      setSuccessData({ position: data.position, referralCode: data.referralCode })
      setWaitlistCount((c) => c + 1)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen">
      {successData && (
        <SuccessModal
          position={successData.position}
          referralCode={successData.referralCode}
          onClose={() => setSuccessData(null)}
        />
      )}

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border bg-card-bg/50 text-sm text-muted mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {waitlistCount}+ store owners on the waitlist
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Your e-commerce team{' '}
            <span className="gradient-text">that never sleeps.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted mb-10 max-w-xl mx-auto leading-relaxed">
            7 AI agents that handle your ads, recover carts, find trends, and grow your store — while you sleep.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="glow-input flex-1 px-5 py-4 bg-card-bg border border-card-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-accent text-base"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-accent hover:bg-accent-glow text-white font-semibold rounded-xl transition-all duration-200 pulse-glow disabled:opacity-50 disabled:animate-none whitespace-nowrap text-base"
              >
                {loading ? 'Joining...' : 'Join the Waitlist'}
              </button>
            </div>
            {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}
          </form>

          <p className="text-sm text-muted">
            First 100 members get <span className="text-accent font-medium">30% off forever</span>. No spam.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-accent mb-4 font-medium">The problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">You&apos;re doing everything yourself.</h2>
          <div className="h-20 flex items-center justify-center">
            <p className="text-xl sm:text-2xl text-muted">
              <span>{displayText}</span>
              <span className="typewriter-cursor" />
            </p>
          </div>
          <p className="mt-8 text-muted max-w-lg mx-auto">
            You didn&apos;t start a business to spend 14 hours a day managing ads, emails, and support tickets. There&apos;s a better way.
          </p>
        </div>
      </section>

      {/* ===== AGENT GRID ===== */}
      <section id="agents" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-accent mb-4 font-medium">The solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Assemble your AI team.</h2>
            <p className="text-muted max-w-lg mx-auto">
              Select the agents you&apos;re interested in. We&apos;ll personalize your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {agents.map((agent) => (
              <AgentCard
                key={agent.slug}
                agent={agent}
                selected={selectedAgents.includes(agent.slug)}
                onToggle={toggleAgent}
              />
            ))}
          </div>

          {selectedAgents.length > 0 && (
            <div className="mt-8 text-center fade-in-up">
              <p className="text-sm text-muted">
                {selectedAgents.length} agent{selectedAgents.length > 1 ? 's' : ''} selected
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-muted">
              Plans starting at <span className="text-foreground font-medium">$147/mo</span> per agent
            </p>
          </div>
        </div>
      </section>

      {/* ===== DEMO PLACEHOLDER ===== */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-accent mb-4 font-medium">See it in action</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Watch Mengo work.</h2>
          <div className="relative aspect-video rounded-2xl border border-card-border bg-card-bg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-secondary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-sm text-muted">Demo video coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EARLY ACCESS CTA ===== */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center p-10 rounded-2xl border border-card-border bg-card-bg/50 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get early access.</h2>
              <p className="text-muted mb-2">
                <span className="text-accent font-bold text-2xl">{waitlistCount}</span>{' '}
                people on the waitlist
              </p>
              <p className="text-sm text-accent-glow mb-8 font-medium">
                First 100 get 30% off forever
              </p>

              <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="glow-input flex-1 px-5 py-4 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-accent text-base"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 bg-accent hover:bg-accent-glow text-white font-semibold rounded-xl transition-all duration-200 pulse-glow disabled:opacity-50 disabled:animate-none whitespace-nowrap"
                  >
                    {loading ? 'Joining...' : 'Join Now'}
                  </button>
                </div>
                {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}
              </form>

              <p className="text-xs text-muted">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Questions?</h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 border-t border-card-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold gradient-text">Mengo.ai</span>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
          <p className="text-sm text-muted">&copy; 2025 Mengo.ai</p>
        </div>
      </footer>
    </main>
  )
}

export default function Home() {
  return (
    <Suspense>
      <LandingPage />
    </Suspense>
  )
}
