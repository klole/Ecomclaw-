export interface Agent {
  slug: string
  name: string
  shortName: string
  icon: string
  tagline: string
  valueProps: string[]
  capabilities: string[]
  useCase: string
  priceHint: string
}

export const agents: Agent[] = [
  {
    slug: 'ad-creative',
    name: 'Ad Creative Intelligence Agent',
    shortName: 'Ad Creative',
    icon: '🎨',
    tagline: 'Never run out of ad ideas. Get winning concepts based on what\'s actually working.',
    valueProps: [
      'Monitors competitor ad libraries across Facebook, TikTok, and more',
      'Tracks viral content in your niche in real-time',
      'Generates creative briefs with specific winning examples',
      'Auto-generates ad copy variations based on winning patterns',
    ],
    capabilities: [
      'Competitor ad library monitoring (Facebook Ad Library, TikTok Creative Center)',
      'Viral content tracking across TikTok, Instagram Reels, YouTube Shorts',
      'Performance analysis — hooks, formats, music, CTAs',
      'Creative brief generation for your team or agency',
      'Ad performance tracking with iteration suggestions',
      'Auto-generated ad copy variations',
    ],
    useCase: 'Imagine waking up every Monday to 10 fresh ad concepts — each one based on what\'s actually converting in your niche right now. No more guessing, no more creative blocks.',
    priceHint: 'Starting at $197/mo',
  },
  {
    slug: 'ppc-optimization',
    name: 'PPC Optimization & A/B Testing Agent',
    shortName: 'PPC Optimizer',
    icon: '📊',
    tagline: 'Stop wasting money on bad ads. Automatically pause losers and scale winners 24/7.',
    valueProps: [
      'Real-time ROAS monitoring across all ad platforms',
      'Auto-pauses underperforming campaigns before they drain budget',
      'Scales winning ads by intelligently increasing spend',
      'Daily spend reports with actionable insights',
    ],
    capabilities: [
      'Real-time ROAS tracking across Facebook, Google, TikTok',
      'Automatic ad pausing when ROAS drops below threshold',
      'Budget scaling for winning campaigns',
      'Continuous A/B testing on copy, creatives, and audiences',
      'Daily spend reports with clear recommendations',
      'Attribution window tracking and bid adjustments',
      'CPM/CPC trend monitoring with cost spike alerts',
    ],
    useCase: 'Imagine your ad account optimizing itself overnight — pausing the $200/day campaign with 0.8 ROAS and shifting budget to the one pulling 4.2x. Every morning, you see more profit.',
    priceHint: 'Starting at $297/mo',
  },
  {
    slug: 'cart-recovery',
    name: 'Customer Support & Cart Recovery Agent',
    shortName: 'Cart Recovery',
    icon: '🛒',
    tagline: 'Recover 15-30% of abandoned carts. Handle 80% of support without lifting a finger.',
    valueProps: [
      'Personalized cart recovery sequences that actually convert',
      'Handles common support questions via email, SMS, WhatsApp',
      'Proactive order status updates to reduce "where\'s my order" tickets',
      'Post-purchase review collection on autopilot',
    ],
    capabilities: [
      'Abandoned cart monitoring with personalized recovery sequences',
      'Multi-channel support handling (email, SMS, WhatsApp)',
      'Smart escalation to humans with full context',
      'Proactive order status notifications',
      'Post-purchase follow-ups and review requests',
      'Negative review monitoring and response drafting',
      'Support volume spike detection',
    ],
    useCase: 'Imagine every abandoned cart getting a perfectly-timed, personalized nudge — and 25% of them completing checkout while you sleep. That\'s thousands in recovered revenue every month.',
    priceHint: 'Starting at $147/mo',
  },
  {
    slug: 'product-launch',
    name: 'Product Launch & Validation Agent',
    shortName: 'Product Launch',
    icon: '🚀',
    tagline: 'Launch winning products faster. Know what\'s trending before your competitors.',
    valueProps: [
      'Monitors trending products across Amazon, TikTok, AliExpress',
      'Analyzes opportunity: search volume, competition, margins',
      'Generates complete launch checklists',
      'Tracks launch performance against benchmarks',
    ],
    capabilities: [
      'Trending product monitoring across Amazon, TikTok, AliExpress',
      'Product opportunity analysis (search volume, competition, margins)',
      'Customer review mining for pain points and opportunities',
      'Supplier inventory monitoring on Alibaba/AliExpress',
      'Launch checklist generation (photos, copy, SEO, ads)',
      'Launch performance benchmarking',
      'Product improvement suggestions from customer feedback',
    ],
    useCase: 'Imagine discovering a trending product 3 weeks before your competitors — with a full launch plan, supplier options, and ad strategy ready to go. First-mover advantage, every time.',
    priceHint: 'Starting at $297/mo',
  },
  {
    slug: 'email-sms',
    name: 'Email & SMS Marketing Automation Agent',
    shortName: 'Email & SMS',
    icon: '📧',
    tagline: 'Turn email and SMS into a profit center. Generate 20-30% of revenue on autopilot.',
    valueProps: [
      'Behavior-based campaigns that feel personal, not spammy',
      'Smart segmentation: new, repeat, VIP, churned customers',
      'A/B tests subject lines, copy, and send times automatically',
      'Works with Klaviyo, Attentive, Postscript',
    ],
    capabilities: [
      'Customer segmentation (new, repeat, VIP, churned)',
      'Behavior-based campaigns (browse abandonment, post-purchase, win-back)',
      'Automated A/B testing on subject lines, copy, timing',
      'Performance tracking with send frequency optimization',
      'Campaign idea generation (holidays, seasons, inventory)',
      'Unsubscribe rate monitoring and strategy adjustments',
      'Integration with Klaviyo, Attentive, Postscript',
    ],
    useCase: 'Imagine your email channel generating $30K/month on autopilot — with perfectly timed messages that make each customer feel like you\'re talking directly to them.',
    priceHint: 'Starting at $147/mo',
  },
  {
    slug: 'influencer-ugc',
    name: 'Influencer & UGC Outreach Agent',
    shortName: 'Influencer & UGC',
    icon: '🤳',
    tagline: 'Build an army of influencers promoting your brand. Get 100+ UGC videos per month.',
    valueProps: [
      'Finds relevant influencers in your niche automatically',
      'Analyzes engagement rates and audience quality',
      'Sends personalized outreach and manages relationships',
      'Tracks influencer ROI down to the conversion',
    ],
    capabilities: [
      'Influencer discovery across Instagram, TikTok, YouTube',
      'Engagement rate and audience quality analysis',
      'Personalized outreach for product seeding and paid partnerships',
      'Performance tracking (views, engagement, conversions)',
      'UGC content monitoring and usage permission requests',
      'Relationship management (follow-ups, payments, contracts)',
      'Influencer brief generation with talking points and CTAs',
    ],
    useCase: 'Imagine 50 micro-influencers posting about your product this month — all sourced, vetted, and managed by AI. Your brand everywhere, without the agency fees.',
    priceHint: 'Starting at $197/mo',
  },
  {
    slug: 'cro',
    name: 'Conversion Rate Optimization Agent',
    shortName: 'CRO',
    icon: '📈',
    tagline: 'Increase conversion rate by 20-50%. Turn more traffic into sales without more ad spend.',
    valueProps: [
      'Identifies exactly where visitors drop off in your funnel',
      'Suggests data-driven A/B tests based on best practices',
      'Monitors page speed and mobile performance',
      'Tracks checkout abandonment with specific fix recommendations',
    ],
    capabilities: [
      'Website analytics monitoring (GA, Hotjar, Shopify Analytics)',
      'Conversion funnel tracking with drop-off identification',
      'A/B test suggestions based on best practices and competitor analysis',
      'Page speed monitoring with degradation alerts',
      'Mobile vs desktop performance comparison',
      'Heatmap analysis with layout improvement suggestions',
      'Checkout abandonment tracking with fix recommendations',
      'Form completion rate tracking and optimization',
    ],
    useCase: 'Imagine your store converting at 4.5% instead of 2.8% — same traffic, same ad spend, but 60% more revenue. That\'s the power of continuous, AI-driven optimization.',
    priceHint: 'Starting at $197/mo',
  },
]

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find(a => a.slug === slug)
}
