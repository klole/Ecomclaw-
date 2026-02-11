# Mengo.ai — Waitlist Landing Page Plan

## Brand
- **Name:** Mengo.ai
- **Domain:** mengo.ai
- **Tagline:** "Your e-commerce team that never sleeps."

## Tech Stack
- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Backend/DB:** Supabase (waitlist entries, referrals, agent interest tracking)
- **Deployment:** Vercel-ready

---

## Page Structure

### Landing Page (`/`)

1. **Hero**
   - Headline: "Your e-commerce team that never sleeps."
   - Sub: "7 AI agents that handle your ads, recover carts, find trends, and grow your store — while you sleep."
   - Single email input + "Join the Waitlist" button
   - Below input: "Join 40+ store owners already on the list"
   - Minimal. No nav clutter. Glowing/pulsing input.

2. **The Problem**
   - 3 pain points with typewriter/fade-in effect:
     - "Wasting ad spend on campaigns that don't convert."
     - "Missing product trends your competitors catch first."
     - "Losing 70% of carts because nobody follows up."

3. **Agent Grid**
   - Interactive card grid — 7 agents
   - Each card: icon, name, one-line value prop, "Learn more →"
   - Clicking a card: highlights it (selected state) + silently tracks interest
   - Selected agents are included when user submits waitlist form
   - Feels like "assembling your AI team"

4. **Video/Demo Placeholder**
   - Video embed placeholder area
   - "See Mengo in action" header
   - Play button overlay on a styled placeholder
   - Will be replaced with real demo video later

5. **Early Access CTA**
   - "Join [X] people on the waitlist."
   - "First 100 get 30% off forever."
   - Waitlist position counter (starts at #40)
   - Email input (pre-filled if already entered in hero)
   - After signup: referral share UI with unique link

6. **FAQ**
   - 5 collapsible questions:
     - "What is Mengo.ai?"
     - "How does it work?"
     - "What platforms do you integrate with?"
     - "How much does it cost?"
     - "When do you launch?"

7. **Footer**
   - Mengo.ai brand
   - Privacy Policy | Terms of Service links
   - © 2025 Mengo.ai

---

### Individual Agent Pages (`/agents/[slug]`)

One page per agent (7 total):

1. `/agents/ad-creative` — Ad Creative Intelligence Agent
2. `/agents/ppc-optimization` — PPC Optimization & A/B Testing Agent
3. `/agents/cart-recovery` — Customer Support & Cart Recovery Agent
4. `/agents/product-launch` — Product Launch & Validation Agent
5. `/agents/email-sms` — Email & SMS Marketing Automation Agent
6. `/agents/influencer-ugc` — Influencer & UGC Outreach Agent
7. `/agents/cro` — Conversion Rate Optimization Agent

Each page includes:
- Agent name + hero with specific value prop
- Detailed capability list (from agents-roles.md)
- Use case scenarios ("Imagine this...")
- Vague pricing hint ("Starting at $X/mo")
- CTA: "Join the waitlist with [Agent Name] pre-selected" → links back to landing page or inline form

---

### Legal Pages
- `/privacy` — Privacy Policy placeholder
- `/terms` — Terms of Service placeholder

---

## Pricing Display
- **Vague / teaser style** — no full pricing table
- Landing page: "Plans starting at $147/mo"
- Agent pages: "Starting at $X/mo" (agent-specific floor price)
- No setup fees shown on waitlist page

---

## Waitlist & Referral System

### Supabase Schema

**Table: `waitlist`**
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, auto |
| email | text | unique |
| position | int | starts at 41 (first real signup) |
| referral_code | text | unique, auto-generated |
| referred_by | text | nullable, referral_code of referrer |
| agent_interests | text[] | array of agent slugs |
| created_at | timestamptz | auto |

**Table: `referral_stats`** (view or computed)
- Count of referrals per user
- Position adjustments

### Waitlist Logic
- Counter displayed on page starts at 40 (hardcoded base)
- Real signups increment from there (position = 40 + count)
- After signup, show: "You're #[position] on the waitlist!"
- Show referral link + share buttons

### Referral Mechanic
- Each signup gets a unique referral code
- Sharing link: `mengo.ai?ref=[code]`
- Benefits:
  - Each referral signup → referrer moves up 5 spots
  - Milestones:
    - 1 referral = skip 5 spots
    - 3 referrals = extra month free
    - 5 referrals = founding member badge + priority access

### Early Access Offer
- First 100 signups: **30% off forever**
- Displayed prominently in hero and CTA sections

---

## Design Direction
- Dark theme with accent glow (electric blue / purple gradient)
- Minimal, "AI-native" aesthetic
- Typewriter/fade-in animations on text
- Cards with subtle hover glow effects
- Single-column layout, generous whitespace
- Mobile-first responsive
