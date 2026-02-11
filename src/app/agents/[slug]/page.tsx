import { agents, getAgentBySlug } from '@/lib/agents'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to handle this synchronously for static generation
  return params.then(({ slug }) => {
    const agent = getAgentBySlug(slug)
    if (!agent) return { title: 'Agent Not Found' }
    return {
      title: `${agent.name} — Mengo.ai`,
      description: agent.tagline,
    }
  })
}

export default async function AgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const agent = getAgentBySlug(slug)

  if (!agent) notFound()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-accent-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Link
            href="/#agents"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all agents
          </Link>

          <div className="text-5xl mb-6">{agent.icon}</div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{agent.name}</h1>
          <p className="text-xl text-muted leading-relaxed mb-6">{agent.tagline}</p>
          <p className="text-sm text-accent font-medium">{agent.priceHint}</p>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-card-border bg-card-bg/50">
            <p className="text-sm uppercase tracking-widest text-accent mb-4 font-medium">Imagine this</p>
            <p className="text-lg text-foreground leading-relaxed">{agent.useCase}</p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Why you need this agent</h2>
          <div className="grid gap-4">
            {agent.valueProps.map((prop, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-card-border bg-card-bg/30">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground">{prop}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Full capabilities</h2>
          <ul className="space-y-3">
            {agent.capabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent mt-1.5 text-xs">&#9679;</span>
                <span className="text-muted">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-10 rounded-2xl border border-card-border bg-card-bg/50 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Get {agent.shortName} on your team.
              </h2>
              <p className="text-muted mb-6">{agent.priceHint} &middot; 30% off forever for early members</p>
              <Link
                href={`/?agent=${agent.slug}`}
                className="inline-block px-8 py-4 bg-accent hover:bg-accent-glow text-white font-semibold rounded-xl transition-all duration-200 pulse-glow"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-card-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold gradient-text">Mengo.ai</Link>
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
