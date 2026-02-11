import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — Mengo.ai',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-sm text-muted mb-12">Last updated: January 2025</p>

        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Mengo.ai, you accept and agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Waitlist</h2>
            <p>
              Joining our waitlist does not guarantee access to our service. Waitlist positions
              and early access offers (including the 30% forever discount for the first 100 members)
              are subject to availability and may be modified at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Referral Program</h2>
            <p>
              Our referral program allows you to share a unique link to move up the waitlist
              and earn perks. Abuse of the referral system (including creating fake accounts)
              may result in removal from the waitlist.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Service Description</h2>
            <p>
              Mengo.ai provides AI-powered agents for e-commerce businesses. Features and
              pricing described on this website are subject to change before and after launch.
              We reserve the right to modify our service offerings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
            <p>
              Mengo.ai is provided &quot;as is&quot; without warranties of any kind. We are not liable
              for any damages arising from the use of our service, including but not limited to
              direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Changes will be posted
              on this page with an updated revision date. Continued use of the service after
              changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <span className="text-accent">hello@mengo.ai</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
