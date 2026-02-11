'use client'

import { useState } from 'react'

interface SuccessModalProps {
  position: number
  referralCode: string
  onClose: () => void
}

export default function SuccessModal({ position, referralCode, onClose }: SuccessModalProps) {
  const [copied, setCopied] = useState(false)
  const referralLink = `https://mengo.ai?ref=${referralCode}`

  function copyLink() {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-card-bg border border-card-border rounded-2xl p-8 max-w-md w-full fade-in-up">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">&#127881;</div>
          <h3 className="text-2xl font-bold text-foreground mb-2">You&apos;re in!</h3>
          <p className="text-muted">
            You&apos;re <span className="text-accent font-bold">#{position}</span> on the waitlist
          </p>
          {position <= 100 && (
            <p className="text-sm text-accent-glow mt-2 font-medium">
              You&apos;ve locked in 30% off forever
            </p>
          )}
        </div>

        <div className="bg-background rounded-xl p-4 mb-6">
          <p className="text-sm text-muted mb-3 text-center">Move up the waitlist — share your link:</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 px-3 py-2 bg-card-bg border border-card-border rounded-lg text-foreground text-sm font-mono"
            />
            <button
              onClick={copyLink}
              className="px-4 py-2 bg-accent hover:bg-accent-glow text-white rounded-lg text-sm font-medium transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <p className="text-xs text-muted text-center font-medium uppercase tracking-wider">Referral Perks</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-background rounded-lg p-3">
              <p className="text-accent font-bold text-sm">1 referral</p>
              <p className="text-muted text-xs mt-1">Skip 5 spots</p>
            </div>
            <div className="bg-background rounded-lg p-3">
              <p className="text-accent font-bold text-sm">3 referrals</p>
              <p className="text-muted text-xs mt-1">Extra month free</p>
            </div>
            <div className="bg-background rounded-lg p-3">
              <p className="text-accent font-bold text-sm">5 referrals</p>
              <p className="text-muted text-xs mt-1">Founding member</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 text-muted hover:text-foreground transition-colors text-sm"
        >
          Close
        </button>
      </div>
    </div>
  )
}
