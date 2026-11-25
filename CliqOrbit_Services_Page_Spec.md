# CliqOrbit: Services Page Specification (`/services`)

**Instruction to the coding agent:** Build the **Services page** in the existing Angular project so that it matches the design and copy below **exactly**. Use all text verbatim. This file **replaces section 5 ("SERVICES page") of the main `CliqOrbit_Website_Spec.md`**. The header, footer, design tokens, fonts, buttons, and pill-badge styles are all defined in that main spec, so reuse them.

- Route: `/services` (nav link "Services" is the active one, shown in blue).
- Page order: **Hero → 4 service sections (alternating layout) → Final CTA → Footer.**
- Anchor ids for the hero pills: `#programmatic`, `#email`, `#web`, `#branding`. Add `scroll-margin-top: 110px` to each section so the sticky header doesn't cover the heading, and use smooth scrolling.

---

## 1. Hero (centered, grid-line background)

- Pill badge (blue dot + text): **Our Services**
- H1 (Space Grotesk bold, ~64px, centered, wraps to 2 lines): **End-to-End Digital Marketing Solutions**
- Paragraph (muted, ~22px, centered, max-width ~820px): *From programmatic advertising to brand strategy, we engineer every service for measurable performance and lasting growth.*
- Row of 4 **ghost pill links** (1px `--border`, radius 999px, white Inter medium 18px, padding ~16px 20px, gap ~16px, centered):
  **Programmatic Ads** → `#programmatic` · **Email Marketing** → `#email` · **Web Design** → `#web` · **Branding** → `#branding`
  Hover: blue border and a slight lift.
- Roughly 150px of empty space follows below the pills before the first section.

---

## 2. Reusable pieces for the 4 service sections

### 2.1 Section layout
- Container 1200px (≈110px side gutters on a 1920 screen). **Two equal columns** with a ~100px gap and vertical padding of ~100px. A 1px `--border` line separates the sections.
- Column contents are vertically top-aligned.
- **Text column** (`ServiceInfo`): eyebrow, H2, paragraph, 3 stat boxes, "Get Started →" button.
- **Cards column** (`ServiceFeatures`): a **3 × 2 grid** of 6 feature cards.
- Alternating order:
  - **Programmatic**: text LEFT, cards RIGHT
  - **Email Marketing**: cards LEFT, text RIGHT
  - **Web Design & Development**: text LEFT, cards RIGHT
  - **Branding & Strategy**: cards LEFT, text RIGHT
- Mobile and tablet (<1024px): single column, **text first, then cards** in every section. Cards go 2 per row at tablet and 1 per row on mobile.

### 2.2 Eyebrow row
A 50×50px rounded-square icon box (`--primary-soft` fill, 1px blue-tinted border, radius ~12px, blue outline icon) followed by an uppercase blue label (Inter semibold ~18px, letter-spacing ~0.08em).

### 2.3 Heading and paragraph
- H2: Space Grotesk bold, ~44px, white, line-height ~1.15, max-width ~780px, ~24px below the eyebrow.
- Paragraph: muted blue-grey (`--text-muted`), ~20px, line-height ~1.65, ~24px below the H2.

### 2.4 Stat boxes (3 in a row, equal width, gap ~16px)
- Bordered card (`--bg-card`/transparent-navy, 1px `--border`, radius ~16px, padding ~24px, **centered content**).
- Number: Space Grotesk, ~40px, `--primary` blue. Label beneath: white-muted, ~16px.
- Rows are equal height, but the last Branding box has a taller 2-line number (see 4.4) and the other two boxes align to the top.

### 2.5 CTA button
Primary "**Get Started →**" (arrow icon), ~40px below the stats, linking to `/contact`. Left-aligned inside the text column.

### 2.6 Feature card (`FeatureCard`)
- Background `--bg-card`, 1px `--border`, radius ~20px, padding ~25px. Equal height across the row (the grid stretches).
- Layout: a **check-circle icon** (blue outline circle with a check mark, ~24px) sits at the top-left; the **title** (white, Space Grotesk/Inter semibold ~18px, wraps to 2-3 lines) sits to its right; the **description** (muted, ~15px, line-height ~1.6) sits below the title **aligned with the title's left edge (indented, not under the icon)**.
- Hover: lift 2-4px and brighten the border.
- Card width ≈ 245px at the desktop reference size (3 columns, gap ≈ 25px).

---

## 3. Data (typed constants, e.g. `data/services.data.ts`)

Use this model:
```ts
interface ServiceSection {
  id: 'programmatic' | 'email' | 'web' | 'branding';
  icon: string;          // lucide icon name
  eyebrow: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  features: { title: string; description: string }[];
  reverse: boolean;      // true => cards on the left
}
```

---

## 4. The four sections: exact content

### 4.1 PROGRAMMATIC ADVERTISING (`id="programmatic"`, text left / cards right, `reverse: false`)
- Icon: **zap (lightning bolt)**
- Eyebrow: **PROGRAMMATIC ADVERTISING**
- H2: **Reach the Right Audience at the Right Moment**
- Paragraph: *Our AI-driven programmatic platform connects your brand to premium inventory across display, video, native, and connected TV — in real time. We combine data science with creative strategy to deliver campaigns that perform at scale.*
- Stats:
  1. **10B+** Ad Impressions Delivered
  2. **3.2x** Average ROAS
  3. **< 50ms** Bid Response Time
- Button: **Get Started →**
- Feature cards (in order, row 1 then row 2):
  1. **Real-Time Bidding (RTB)**: Access premium inventory through our advanced RTB infrastructure with millisecond-level decisioning.
  2. **AI Audience Targeting**: Machine learning models identify and reach your highest-value audience segments across channels.
  3. **Cross-Channel Delivery**: Unified campaigns across display, video, native, CTV, and mobile in-app environments.
  4. **Brand Safety Controls**: Contextual filtering and third-party verification ensure your ads appear in brand-safe environments.
  5. **Transparent Reporting**: Real-time dashboards with full impression-level transparency and attribution modelling.
  6. **Continuous Optimisation**: Automated bid and creative optimisation that improves performance throughout the campaign lifecycle.

### 4.2 EMAIL MARKETING (`id="email"`, cards left / text right, `reverse: true`)
- Icon: **mail (envelope)**
- Eyebrow: **EMAIL MARKETING**
- H2: **Campaigns That Convert, Sequences That Retain**
- Paragraph: *We design and deploy email programmes that move people — from first touch to loyal customer. Our team handles strategy, copywriting, design, automation, and deliverability so every send counts.*
- Stats:
  1. **45%** Average Open Rate
  2. **8.7%** Average Click Rate
  3. **500M+** Emails Sent
- Button: **Get Started →**
- Feature cards:
  1. **Automated Drip Sequences**: Behaviour-triggered journeys that nurture leads and onboard customers without manual effort.
  2. **Broadcast Campaigns**: High-impact sends for product launches, promotions, and announcements — built to land in the inbox.
  3. **Segmentation & Personalisation**: Dynamic content and audience segmentation that makes every email feel one-to-one.
  4. **Deliverability Management**: Domain warming, authentication setup, and list hygiene to protect your sender reputation.
  5. **A/B & Multivariate Testing**: Systematic testing of subject lines, content, and send times to continuously lift performance.
  6. **Analytics & Reporting**: Full-funnel attribution from open to conversion, with actionable insights after every campaign.

### 4.3 WEB DESIGN & DEVELOPMENT (`id="web"`, text left / cards right, `reverse: false`)
- Icon: **globe**
- Eyebrow: **WEB DESIGN & DEVELOPMENT**
- H2: **Websites Built for Performance and Conversion**
- Paragraph: *We build fast, accessible, and visually compelling digital experiences — from marketing sites to complex web applications. Every project is engineered for speed, SEO, and conversion from the ground up.*
- Stats:
  1. **200+** Sites Launched
  2. **< 1.5s** Average Load Time
  3. **99.9%** Uptime SLA
- Button: **Get Started →**
- Feature cards:
  1. **UX & UI Design**: Research-led design that balances aesthetics with usability, guiding visitors toward conversion.
  2. **High-Performance Development**: Modern tech stacks optimised for Core Web Vitals, SEO, and lightning-fast load times.
  3. **Conversion Rate Optimisation**: Landing pages and user flows designed and tested to maximise lead generation and sales.
  4. **CMS Integration**: Headless and traditional CMS setups that give your team full content control without developer dependency.
  5. **E-commerce Solutions**: Custom storefronts and checkout experiences built for scale, with seamless payment integration.
  6. **Ongoing Support & Maintenance**: Proactive monitoring, security updates, and iterative improvements to keep your site performing.

### 4.4 BRANDING & STRATEGY (`id="branding"`, cards left / text right, `reverse: true`)
- Icon: **palette**
- Eyebrow: **BRANDING & STRATEGY**
- H2: **Brands That Stand Out and Last** (a single line at desktop width)
- Paragraph: *We craft cohesive brand identities and go-to-market strategies that position you ahead of the competition. From naming and visual identity to messaging frameworks and launch plans, we build brands with purpose.*
- Stats:
  1. **150+** Brands Built
  2. **15+** Countries
  3. **Full-Spectrum** Brand Systems. In the original design this long value wraps onto two lines ("Full-" / "Spectrum"), which makes that box taller than the other two. Keep this behaviour (don't shrink the font to avoid the wrap). Keep the top alignment so the first two boxes stay short.
- Button: **Get Started →**
- Feature cards:
  1. **Brand Identity Design**: Logo, colour palette, typography, and visual language that communicate your brand's essence.
  2. **Brand Strategy**: Positioning, differentiation, and competitive analysis that define where your brand plays and how it wins.
  3. **Messaging & Tone of Voice**: Clear, consistent messaging frameworks and copy guidelines that unify every customer touchpoint.
  4. **Go-to-Market Planning**: Launch strategies that align product, marketing, and sales for maximum market impact.
  5. **Brand Guidelines**: Comprehensive brand books that ensure consistency across every team, agency, and channel.
  6. **Rebranding & Refresh**: Strategic evolution of existing brands — preserving equity while modernising for new audiences.

---

## 5. Final CTA (centered, band with the slightly lighter `--bg-section-alt` and 1px top/bottom borders; ~100px vertical padding)
- H2 (~52px, centered): **Ready to Get Started?**
- Paragraph (muted, ~22px, centered, max-width ~680px, 2 lines): *Tell us about your goals and we'll recommend the right combination of services for your business.*
- Primary button: **Talk to Our Team →** → `/contact`

Then the shared **Footer** (identical to the other pages).

---

## 6. Angular implementation notes
- Components: `ServicesPageComponent` (hero + `@for` over sections + CTA), `ServiceSectionComponent` (input: `ServiceSection`; applies the `reverse` class using CSS grid `order` or `direction`), `FeatureCardComponent`, `StatBoxComponent`, and the reusable `PillBadge` and `CtaBand`.
- Use `RouterLink` with `fragment` or a plain `(click)` handler plus `scrollIntoView({behavior:'smooth'})` for the hero pills. Keep `scroll-margin-top` on the sections.
- Use semantic HTML: one `<h1>`, section `<h2>`s, and `<ul>` for the feature lists. Check-circle icons are decorative (`aria-hidden="true"`).
- Optional: add a fade-up animation on scroll (disabled for `prefers-reduced-motion`).
- Set `<title>`: "Services | CliqOrbit" and a meta description based on the hero paragraph.

## 7. Acceptance checklist
- [ ] The hero matches (pill, 2-line H1, paragraph, 4 anchor pills that scroll to the right sections).
- [ ] All 4 sections appear in the order Programmatic → Email → Web → Branding, with the alternating layout (text/cards/text/cards).
- [ ] Every title, paragraph, stat, and all 24 feature cards match this document word for word (check the em dashes "—" and "A/B & Multivariate Testing").
- [ ] Each feature card has the check-circle icon, a title, and a description indented under the title.
- [ ] The "Full-Spectrum" stat wraps to 2 lines as in the design.
- [ ] The final CTA reads "Ready to Get Started?" with the "Talk to Our Team →" button.
- [ ] Responsive: stacks to a single column (text first), with cards going 3 → 2 → 1 columns.
- [ ] `ng build` passes with no console errors.
