import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Mengo.ai',
}

export default function PrivacyPage() {
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

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted mb-12">Last updated: January 2025</p>

        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>
              When you join our waitlist, we collect your email address and any preferences
              you select (such as which AI agents you&apos;re interested in). If you use a referral
              link, we track the referral relationship to provide waitlist benefits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Manage your position on our waitlist</li>
              <li>Send you updates about Mengo.ai launch and early access</li>
              <li>Personalize your experience based on agent preferences</li>
              <li>Process referral benefits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Storage</h2>
            <p>
              Your data is stored securely using Supabase, a trusted cloud database provider.
              We implement appropriate security measures to protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to
              outside parties. We may share data with trusted service providers who assist
              us in operating our website, provided they agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
            <p>
              You can request to have your data deleted at any time by contacting us.
              You can also unsubscribe from our communications at any time using the
              unsubscribe link in our emails.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact</h2>
            <p>
              If you have questions about this privacy policy, please contact us at{' '}
              <span className="text-accent">hello@mengo.ai</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
