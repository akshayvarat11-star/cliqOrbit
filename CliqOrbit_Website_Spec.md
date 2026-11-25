# CliqOrbit Website: Angular Build Specification

**Instruction to the coding agent:** Recreate the CliqOrbit marketing website inside the existing Angular project so that it matches the design, layout, and copy below **exactly**. Use the text verbatim (including the stat numbers, headings, and button labels). Do not invent extra sections, and do not rewrite or "improve" the copy.

---

## 1. Tech and project setup

- Framework: the existing Angular project (use standalone components and the Angular Router; lazy-load page routes).
- Styling: SCSS with global CSS variables (design tokens below). Tailwind is optional, but keep the tokens identical.
- Icons: Lucide icons (`lucide-angular`) or an equivalent outline icon set (thin 1.5-2px stroke).
- Fonts (Google Fonts): **Space Grotesk** for headings and the logo wordmark; **Inter** for body, nav, and buttons. Add `preconnect` and a fallback stack (`system-ui, sans-serif`).
- Fully responsive (desktop ≥1200px is the reference; tablet and mobile collapse the grids and show a hamburger menu).
- SEO: set a `<title>` and meta description per route.

### Routes

| Route | Page | Nav label |
|---|---|---|
| `/` | Home | Home |
| `/services` | Services | Services |
| `/about` | About | About |
| `/portfolio` | Case Studies | Case Studies |
| `/contact` | Contact | Contact |

Wildcard route `**` redirects to `/`.

### Suggested structure

```
src/app/
  core/layout/header/        (sticky navbar)
  core/layout/footer/
  shared/components/         (section-label, pill-badge, stat-card, service-card, cta-section, orbit-graphic, case-card, icon-box)
  pages/home/ services/ about/ portfolio/ contact/
  data/                      (typed constants: services, stats, case-studies, team, values)
```

---

## 2. Design tokens (approximate values read from screenshots; adjust by eye if needed)

```scss
:root {
  --bg-page:        #0A1628;   // main dark navy background
  --bg-section-alt: #0D1B34;   // slightly lighter alternate band (industries strip, CTA/stats bands)
  --bg-card:        #0F2040;   // cards / panels
  --bg-input:       #0A1628;   // form inputs (darker than card)
  --border:         #1A2D52;   // 1px card/section borders (subtle blue-navy)
  --primary:        #1F6BFF;   // buttons, links, active nav, stat numbers
  --primary-hover:  #3B82F6;
  --primary-soft:   rgba(31,107,255,0.12);  // icon box bg, pill bg
  --text:           #FFFFFF;
  --text-muted:     #94A3B8;   // body paragraphs (blue-grey)
  --text-dim:       #64748B;   // small captions
  --tag-green:      #10B981;   // Email Marketing
  --tag-purple:     #A855F7;   // Branding & Strategy
  --tag-orange:     #F59E0B;   // Web Design & Development
  --radius-card:    20px;
  --radius-btn:     8px;
  --radius-pill:    999px;
  --container:      1200px;    // max width; ~110px side gutters on a 1920 screen
}
```

### Global styling rules
- Page background: solid `--bg-page`. Hero sections (Home, Services, About, Contact) have a **faint grid-line overlay** (1px lines, ~75px squares, very low-opacity blue) and a soft radial navy glow at the top center.
- Headings: Space Grotesk, bold (700), white, tight line-height (~1.1).
- Section eyebrow label: uppercase, letter-spacing ~0.08em, `--primary`, 14px, semibold (e.g., "WHAT WE DO", "WHY CLIQORBIT").
- Pill badge: rounded pill, 1px `--primary` border at ~40% opacity, `--primary-soft` background, a small filled blue dot on the left, blue semibold 14px text.
- Card: `--bg-card`, 1px `--border`, radius 20px, padding ~40px. A faint blue radial glow can sit in the top-right corner of the large cards.
- Icon box: 60×60 rounded square (radius ~14px), `--primary-soft` background, 1px blue-tinted border, blue outline icon centered.
- Primary button: `--primary` background, white Inter semibold 16px, radius 8px, padding ~20px×36px; the arrow variant has a `→` icon after the label.
- Secondary (ghost) button: transparent background, 1px `--border` outline, white text, same size and radius.
- Keyboard focus: visible white/blue outline (the screenshots show a white focus ring on the focused nav link and the CTA button).
- Section vertical padding: ~100-120px. Sections are separated by a 1px `--border` line.

---

## 3. Global components

### 3.1 Header / Navbar (sticky, on every page)
- Height ~100px, background `--bg-page` (slightly translucent with blur on scroll), 1px bottom border `--border`.
- **Left:** logo = a white circular **orbit ring** icon (an open circle outline with a small solid dot at the top-right of the ring, 60px) followed by the wordmark **"CliqOrbit"** in Space Grotesk bold white (~40px). Clicking it goes to `/`. Build the ring as an inline SVG.
- **Center:** nav links: `Home`, `Services`, `About`, `Case Studies`, `Contact`. Inter medium 18px, color `--text-muted` (light grey-white); the **active route is blue (`--primary`)**.
- **Right:** primary button **"Get Started"** (links to `/contact`).
- Mobile: hamburger toggling a full-width dropdown with the same links plus the button.

### 3.2 Footer (on every page, below the final CTA)
Three-column layout, background `--bg-page`, top border:
- **Col 1 (wide):** logo (smaller, ~36px ring + wordmark); paragraph: *"Powering the future of digital advertising with AI-driven programmatic solutions, precision marketing, and cutting-edge technology for businesses worldwide."*; beneath it two square 44px icon buttons (rounded 10px, 1px border): **LinkedIn ("in")** and **X (Twitter)**.
- **Col 2, heading "SERVICES"** (uppercase, white, bold 16px, letter-spaced) with muted links: Programmatic Advertising · Email Marketing · Web Design & Development · Branding & Strategy · AI-Powered Marketing.
- **Col 3, heading "COMPANY"** with links: About Us · Case Studies · Contact · Privacy Policy · Terms of Service. Below it, heading **"CONTACT"** with `support@cliqorbit.com` and `cliqorbit.com`.
- **Bottom bar** (1px top border): left *"© 2026 CliqOrbit. All rights reserved."*; right *"Powering Digital Growth Worldwide"* (both small, muted).

### 3.3 Reusable "Orbit graphic" (used on Home hero and the Home "Why CliqOrbit" section)
A decorative SVG of concentric circles around a glowing center:
- Center: solid blue dot with a soft glow (~28px).
- Three concentric thin blue rings (radii roughly 95 / 165 / 235px in the hero), with 1px strokes at ~40-60% blue opacity; the innermost ring is slightly brighter.
- Small blue dots ("satellites") placed on rings: top of the outer ring (larger, glowing), one on the middle ring at the top, one at the inner ring's top (grey-white, tiny), dots at the left and right ends of the horizontal axis on each ring, one at the top-right (~45°) and one at the bottom-left on the outer ring. Faint dashed diagonal and vertical guide lines run through the center.
- Animation: slow rotation of the rings and a gentle pulse on the center dot (CSS keyframes; respect `prefers-reduced-motion`).

### 3.4 Reusable "Stat" blocks
Big number (Space Grotesk, ~44px) with a small label underneath. Two variants: (a) white number on the hero, (b) blue number inside bordered cards.

---

## 4. HOME page (`/`)

### 4.1 Hero (two columns: text left, orbit graphic right; grid-line background)
- Pill badge: **"AI-Powered Marketing Platform"**
- H1 (≈72px, 3 lines): **"Powering the Future of Digital Advertising"** (wraps as "Powering the Future / of Digital / Advertising")
- Paragraph (muted, ~22px, max-width ~720px): *"CliqOrbit delivers AI-powered programmatic advertising, precision marketing, and cutting-edge digital solutions that drive measurable growth for businesses worldwide."*
- Buttons: primary **"Get Started →"** (to `/contact`) and ghost **"Our Services"** (to `/services`).
- A thin horizontal divider line (~720px wide, `--border`), then a **stats row** of 4 items (white numbers):
  - **500+** Clients Served
  - **10B+** Ad Impressions
  - **15+** Countries
  - **98%** Client Retention
- Right column: the orbit graphic (3.3), vertically centered.

### 4.2 "Industries We Serve" strip
Full-width band with `--bg-section-alt`, top and bottom borders. Single row, centered: small uppercase letter-spaced label **"INDUSTRIES WE SERVE"** (muted), then the items separated by small dim dots (•): **Advertisers · Publishers · Ad Agencies · E-commerce Brands · Tech Companies · Media Companies** (white, medium, ~20px).

### 4.3 "What We Do" (services bento grid)
- Eyebrow: **"WHAT WE DO"**
- H2 (~44px, left-aligned, max-width ~700px): **"End-to-end digital marketing solutions engineered for performance"**
- A **bento grid** (12-col; row 1: wide card ≈ 2/3 + narrower card ≈ 1/3; row 2: narrow card ≈ 1/3 + wide card ≈ 2/3 (visually: left card ~ 540px, right card ~1100px)). Each card: icon box, title (Space Grotesk 28px bold), description (muted), and a pill tag at the bottom.
  1. **Programmatic Advertising** (wide), icon: lightning bolt (zap). Text: *"Real-time bidding and AI-driven ad placement across premium inventory. Reach your audience with precision at scale."* Tag: **"10B+ impressions delivered"**
  2. **Email Marketing** (narrow), icon: trending-up arrow. Text: *"Automated, personalized email campaigns that convert. From drip sequences to broadcast campaigns."* Tag: **"45% avg. open rate"**
  3. **Web Design & Development** (narrow), icon: settings/gear. Text: *"High-performance websites and digital experiences built for conversion and brand impact."* Tag: **"200+ sites launched"**
  4. **Branding & Strategy** (wide), icon: globe. Text: *"Cohesive brand identities and go-to-market strategies that position you ahead of the competition."* Tag: **"Full-spectrum brand systems"**
- Cards have a hover effect (slight lift, brighter border).

### 4.4 "Why CliqOrbit" (two columns: list left, graphic right)
- Eyebrow: **"WHY CLIQORBIT"**
- H2: **"Why CliqOrbit"**
- Paragraph: *"We combine deep industry expertise with proprietary AI technology to deliver results that matter."*
- Four feature rows (small icon box on the left, bold title + muted description):
  1. (zap) **AI-Powered Optimization**: *"Machine learning algorithms continuously optimize your campaigns for maximum ROI."*
  2. (trending-up) **Real-Time Bidding**: *"Access premium ad inventory through our advanced RTB infrastructure with millisecond response times."*
  3. (settings) **Custom Solutions**: *"Every strategy is built from scratch for your business, no templates, no one-size-fits-all."* (use an em dash in the original: "business — no templates")
  4. (globe) **Global Reach**: *"Operate across 15+ countries with localized expertise and global-scale infrastructure."*
- Right: the orbit graphic (slightly smaller than the hero) with **two floating stat chips** (small rounded cards, `--bg-card`, border): top-right **"10B+ / Ad Impressions"** and bottom-left **"98% / Retention Rate"** (blue number, muted label).

### 4.5 Final CTA band (`--bg-section-alt`, top/bottom border; two columns)
- Left: H2 **"Ready to Accelerate Your Digital Growth?"** (~56px); paragraph *"Join 500+ businesses already growing with CliqOrbit's AI-powered marketing platform."*; buttons: primary **"Start Your Journey →"** (`/contact`) and ghost **"View Case Studies"** (`/portfolio`).
- Right: **2×2 grid of stat cards** (blue ~44px numbers, muted labels): **500+** Clients Served · **10B+** Ad Impressions · **15+** Countries · **98%** Client Retention.
- Then the Footer.

---

## 5. SERVICES page (`/services`)

Only the top of this page was captured in the screenshots. Build the hero exactly as shown and then **build the remaining sections from the Home page content** (the four service cards plus AI-Powered Marketing), without inventing new marketing claims:

### 5.1 Hero (centered, grid background)
- Pill badge: **"Our Services"**
- H1 (~64px, centered, 2 lines): **"End-to-End Digital Marketing Solutions"**
- Paragraph (centered, muted): *"From programmatic advertising to brand strategy, we engineer every service for measurable performance and lasting growth."*
- Row of 4 **pill anchor buttons** (ghost, rounded, white text): **Programmatic Ads · Email Marketing · Web Design · Branding**. They scroll to the matching section below.

### 5.2 Service detail sections (below the hero)
Each is an alternating two-column block with an anchor id (`#programmatic`, `#email`, `#web`, `#branding`). The first visible section header shows an icon box and blue uppercase eyebrow **"PROGRAMMATIC ADVERTISING"**, with three smaller cards to its right (a feature-card row). For each section reuse the title, description, and tag text from 4.3 above, and add 3 short feature cards per service. If the original copy for these cards is not provided, leave clearly marked `// TODO: copy from client` placeholders rather than inventing numbers.

### 5.3 Final CTA + Footer (same pattern as the About CTA).

---

## 6. ABOUT page (`/about`)

### 6.1 Hero (centered, grid background)
- Pill badge: **"About CliqOrbit"**
- H1 (~72px, centered, 2 lines): **"We're the Team Behind the Numbers"** (use the curly apostrophe ’)
- Paragraph (centered, max-width ~800px): *"CliqOrbit was built by marketers and engineers who believed digital advertising could be smarter, faster, and more transparent. That belief still drives everything we do."*

### 6.2 Stats band (full width, `--bg-section-alt`, 4 equal columns separated by 1px vertical borders; blue ~48px numbers, white small labels)
**2018** Year Founded · **500+** Clients Worldwide · **80+** Team Members · **15+** Countries

### 6.3 "Our Story" (two columns)
- Left: H2 **"Our Story"** + three paragraphs (muted, ~20px, line-height 1.6):
  1. *"CliqOrbit was founded with a single conviction: that most businesses were leaving enormous value on the table because their digital marketing was reactive, fragmented, and opaque. We set out to change that."*
  2. *"Starting with a small team of programmatic specialists and data scientists, we built our own AI-driven bidding infrastructure from the ground up — one that could make smarter decisions in milliseconds and explain every one of them."*
  3. *"Today, CliqOrbit operates across 15+ countries, has delivered over 10 billion ad impressions, and works with 500+ clients ranging from ambitious startups to global enterprises. The mission hasn't changed: make every marketing dollar work harder."*
- Right: one large info card with 3 rows (icon box + small muted label + bold white value):
  - (calendar) **Founded** → **2018**
  - (users) **Team Size** → **80+ people**
  - (globe) **Global Reach** → **15+ countries**
  - divider line, then small muted **"Headquartered in"** and bold **"Global — offices across APAC, EMEA & Americas"**

### 6.4 "Mission & Vision" (H2 centered: **"Mission & Vision"**; two equal cards, max-width ~1120px centered)
- Card 1: (target icon) eyebrow **"OUR MISSION"**, text (white, ~22px): *"To give every business — regardless of size — access to the same AI-powered marketing intelligence that was once reserved for the world's largest brands."*
- Card 2: (eye icon) eyebrow **"OUR VISION"**, text: *"A world where marketing spend is never wasted: where every impression, email, and touchpoint is precisely targeted, transparently reported, and continuously optimised."*

### 6.5 "What We Stand For" (H2 centered; 3×2 grid of cards: icon box, bold white title, muted description)
1. (target) **Transparency First**: *"We believe clients deserve to see exactly where their budget goes and why every decision was made. No black boxes."*
2. (eye) **Performance Over Promises**: *"We measure success in results — ROAS, conversions, retention — not vanity metrics or inflated impressions."*
3. (trending-up) **Technology with Purpose**: *"We build and deploy AI not for its own sake, but because it genuinely makes campaigns smarter and clients more competitive."*
4. (users) **Long-Term Partnerships**: *"Our 98% client retention rate reflects our belief that the best work happens when we grow alongside our clients."*
5. (globe) **Global Thinking**: *"With teams and clients across 15+ countries, we bring international perspective to every campaign we run."*
6. (trending-up) **Continuous Improvement**: *"Markets shift, algorithms evolve, and audiences change. We stay ahead so our clients always have the edge."*

### 6.6 "Leadership Team" (H2 centered + muted subtitle: *"Experienced operators who have built and scaled digital marketing programmes across industries and continents."*)
Four equal cards, each with a 80px circular avatar (blue-tinted fill, 1px blue border, blue initials), name (bold white), role (blue), and bio (muted, small, centered):
1. **AM** · **Arjun Mehta** · Chief Executive Officer: *"15 years in programmatic and performance marketing. Previously led growth at two adtech unicorns before founding CliqOrbit."*
2. **PN** · **Priya Nair** · Chief Technology Officer: *"Former ML engineer at a leading DSP. Architected CliqOrbit's real-time bidding engine and AI optimisation layer."*
3. **JO** · **James Okafor** · Chief Revenue Officer: *"Built and led sales teams across EMEA and APAC. Passionate about connecting clients to measurable marketing outcomes."*
4. **SR** · **Sofia Reyes** · Head of Creative Strategy: *"Award-winning creative director with a decade of experience crafting brand narratives for global and regional markets."*

### 6.7 CTA (centered) + Footer
H2 **"Ready to Work With Us?"**, paragraph *"Whether you're launching a new campaign or rethinking your entire marketing strategy, we'd love to hear about your goals."*, primary button **"Get in Touch →"** (`/contact`).

---

## 7. CASE STUDIES page (`/portfolio`)

### 7.1 Hero (centered)
- Background: a **dark, heavily overlaid dashboard/analytics photo** (charts, "Data Analysis / TOTAL EARNINGS" UI) at very low opacity under a navy gradient. Use a royalty-free analytics-dashboard image with a `rgba(10,22,40,0.9)` overlay.
- Pill badge: **"Case Studies"**
- H1 (~72px, 2 lines): **"Results That Speak for Themselves"**
- Paragraph: *"Real campaigns, real clients, real numbers. Here's what we've built together."*

### 7.2 Filter chips (centered row)
**All** (active: solid blue, white text, glow) · **Programmatic** · **Email Marketing** · **Web Design** · **Branding** (inactive: ghost pills). Clicking filters the grid by category (client-side, with fade/animation).

### 7.3 Case-study grid (3 columns, gap ~30px)
**Card anatomy:** top row = icon + coloured uppercase category label + industry subtitle (left); region (globe icon) and duration (clock icon) in muted small text (right). Then uppercase muted client name, bold white headline (~24px), a row of 3 metric boxes (bordered small cards, blue number ~36px bold + tiny muted 2-line label), and a blue link **"View case details →"**.

Category colours: Programmatic = blue (zap icon), Email Marketing = green (mail icon), Web Design & Development = orange (layout icon), Branding & Strategy = purple (palette icon).

| # | Category · Industry | Region | Duration | Client | Headline | Metrics |
|---|---|---|---|---|---|---|
| 1 | PROGRAMMATIC ADVERTISING · Fintech | APAC | 90 days | FINEDGE TECHNOLOGIES | 340% increase in qualified leads within 90 days | **340%** Increase in Qualified Leads · **2.8x** ROAS Improvement · **62%** Reduction in CPL |
| 2 | EMAIL MARKETING · E-commerce / Beauty | Global | 3 weeks | LUMARA BEAUTY | 58% open rate and $2.1M in attributed revenue from a single launch sequence | **58%** Average Open Rate · **$2.1M** Attributed Revenue · **12.4%** Click-to-Purchase Rate |
| 3 | WEB DESIGN & DEVELOPMENT · Logistics & Supply Chain | EMEA | 8 weeks | MERIDIAN LOGISTICS | New site delivers 4.2x more inbound enquiries at 1.1s load time | **4.2x** More Inbound Enquiries · **1.1s** Average Load Time · **91** Google PageSpeed Score |
| 4 | BRANDING & STRATEGY · Healthcare Technology | Americas | 6 months | VANTARA HEALTH | Full rebrand drives 210% growth in enterprise pipeline in 6 months | **210%** Enterprise Pipeline Growth · **3.5x** Increase in Demo Requests · **6** Months to Results |
| 5 | PROGRAMMATIC ADVERTISING · Clean Energy | Americas & EMEA | 5 months | SOLARNOVA ENERGY | Scaled from 3 to 11 markets while maintaining sub-$18 CPL | **11** Markets Activated · **$18** Blended CPL Maintained · **290%** Total Lead Volume Growth |
| 6 | EMAIL MARKETING · Retail | APAC | Ongoing | KOVA RETAIL GROUP | Automated retention programme reduces churn by 34% year-on-year | **34%** Reduction in Churn · **2.6x** Increase in Repeat Purchase Rate · **47%** Revenue from Automated Flows |

Cards have a hover state (lifted, border brightens; the link underlines). Each "View case details →" link can route to `/portfolio/:slug`, or be a no-op placeholder if no detail page is requested.

### 7.4 CTA + Footer
H2 **"Want Results Like These?"**, paragraph *"Tell us about your business and we'll show you what's possible."*, primary button **"Start a Conversation →"** (`/contact`). Then the footer.

---

## 8. CONTACT page (`/contact`)

### 8.1 Hero (centered, grid background)
- Pill badge: **"Get in Touch"**
- H1 (~72px): **"Let’s Build Something Great Together"** (curly apostrophe)
- Paragraph: *"Tell us about your goals and we'll get back to you within one business day."*

### 8.2 Two-column body (left ≈ 40%, right ≈ 60%)
**Left, H2 "Contact Details"** + muted text *"Reach out directly or fill in the form and we'll connect you with the right team."* Then three stacked info cards (icon box + small uppercase muted label + white bold value):
- (mail) **EMAIL** → `support@cliqorbit.com` (mailto link)
- (globe) **WEBSITE** → `cliqorbit.com`
- (clock) **RESPONSE TIME** → **Within 1 business day**

Then a card titled **"Services We Offer"** with a list; each item has a small blue `→` arrow icon: Programmatic Advertising · Email Marketing · Web Design & Development · Branding & Strategy · AI-Powered Marketing · General Enquiry.

**Right, form card** (large card, radius 24px, padding ~50px), H2 **"Send Us a Message"**:
- Row: **Full Name \*** (placeholder `Jane Smith`) and **Email Address \*** (placeholder `jane@company.com`), two columns.
- **Company / Organisation** (optional; placeholder `Your company name`)
- **Service of Interest \*** (select; first option `Select a service...`; options = the 6 items in the "Services We Offer" list)
- **Message \*** (textarea, ~5 rows; placeholder `Tell us about your project, goals, or any questions you have...`)
- Full-width primary button **"Send Message →"**.
- Labels: white, semibold 18px; the required asterisk is blue. Inputs: `--bg-input`, 1px `--border`, radius 12px, height ~56px, placeholder `--text-dim`; the focus state shows a blue border/ring.

Use Angular **Reactive Forms**: required validators on name, email (with `Validators.email`), service, and message. Show inline error messages and disable submit while invalid or submitting. On submit, call a `ContactService` (placeholder HTTP POST to `/api/contact`, easy to swap), then show a success state ("Thanks! We'll get back to you within one business day.") and reset the form.

### 8.3 Footer

---

## 9. Interactions and polish
- Smooth scroll to top on route change; sticky header with a subtle backdrop blur.
- Subtle fade-up on scroll for sections/cards (IntersectionObserver directive; disabled under `prefers-reduced-motion`).
- Hover: buttons brighten (`--primary-hover`), ghost buttons gain a blue border, nav links brighten.
- Accessibility: semantic landmarks (`header`, `main`, `footer`), one `h1` per page, alt text/aria-labels on icon buttons (LinkedIn, X), a visible focus ring, and sufficient contrast.

## 10. Responsive behaviour
- ≥1200px: layouts as described.
- 768-1199px: hero stacks (text above, orbit graphic below and smaller); the 3-col grids become 2 columns; the bento grid becomes 2 columns.
- <768px: single column everywhere; nav collapses to a hamburger; H1 scales to ~40px; the stats row wraps in a 2×2 grid; footer columns stack.

## 11. Acceptance checklist
- [ ] All 5 routes work, with the active nav link highlighted in blue.
- [ ] All copy matches this document word for word.
- [ ] Colours, fonts (Space Grotesk and Inter), radii, and spacing match the tokens above.
- [ ] Orbit graphic appears in the Home hero and the "Why CliqOrbit" section (with the two floating stat chips).
- [ ] The bento grid, case-study filters, and contact form validation function.
- [ ] Header and footer are identical on every page.
- [ ] Responsive and no console errors; `ng build` passes.

> **Note for the agent:** The Services page was only partly captured (hero only). Do not fabricate extra statistics or testimonials; use only the facts listed here.
