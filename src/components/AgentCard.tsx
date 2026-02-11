'use client'

import Link from 'next/link'
import { Agent } from '@/lib/agents'

interface AgentCardProps {
  agent: Agent
  selected: boolean
  onToggle: (slug: string) => void
}

export default function AgentCard({ agent, selected, onToggle }: AgentCardProps) {
  return (
    <div
      onClick={() => onToggle(agent.slug)}
      className={`card-glow cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
        selected
          ? 'card-selected'
          : 'bg-card-bg border-card-border hover:border-accent/40'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{agent.icon}</span>
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
            selected ? 'border-accent bg-accent' : 'border-card-border'
          }`}
        >
          {selected && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2">{agent.shortName}</h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{agent.tagline}</p>
      <Link
        href={`/agents/${agent.slug}`}
        onClick={(e) => e.stopPropagation()}
        className="text-accent text-sm hover:text-accent-glow transition-colors"
      >
        Learn more &rarr;
      </Link>
    </div>
  )
}
