'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What is Mengo.ai?',
    a: 'Mengo.ai is a suite of 7 AI agents built specifically for e-commerce store owners. Each agent handles a critical part of your business — from ad creative to cart recovery to influencer outreach — so you can focus on what matters.',
  },
  {
    q: 'How does it work?',
    a: 'Once you connect your store, our AI agents plug into your existing tools (ad platforms, email providers, analytics) and start working autonomously. You get daily reports, actionable insights, and results — without lifting a finger.',
  },
  {
    q: 'What platforms do you integrate with?',
    a: 'We integrate with Shopify, WooCommerce, Facebook Ads, Google Ads, TikTok Ads, Klaviyo, Attentive, Google Analytics, and more. New integrations are added regularly.',
  },
  {
    q: 'How much does it cost?',
    a: 'Plans start at $147/mo per agent. Early waitlist members get 30% off forever. We\'ll share full pricing details closer to launch.',
  },
  {
    q: 'When do you launch?',
    a: 'We\'re rolling out access to waitlist members in batches. The earlier you join, the sooner you get access. First 100 members also lock in 30% off forever.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-card-border rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-card-bg/50 transition-colors"
          >
            <span className="font-medium text-foreground">{faq.q}</span>
            <svg
              className={`w-5 h-5 text-muted transition-transform duration-200 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 pb-4 text-muted text-sm leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
