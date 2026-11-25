export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceSection {
  id: 'programmatic' | 'email' | 'web' | 'branding';
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  stats: ServiceStat[];
  features: ServiceFeature[];
  reverse: boolean;
}

export const SERVICES: ServiceSection[] = [
  {
    id: 'programmatic',
    icon: 'zap',
    eyebrow: 'PROGRAMMATIC ADVERTISING',
    title: 'Reach the Right Audience at the Right Moment',
    description: 'Our AI-driven programmatic platform connects your brand to premium inventory across display, video, native, and connected TV — in real time. We combine data science with creative strategy to deliver campaigns that perform at scale.',
    stats: [
      { value: '10B+', label: 'Ad Impressions Delivered' },
      { value: '3.2x', label: 'Average ROAS' },
      { value: '< 50ms', label: 'Bid Response Time' }
    ],
    reverse: false,
    features: [
      { title: 'Real-Time Bidding (RTB)', description: 'Access premium inventory through our advanced RTB infrastructure with millisecond-level decisioning.' },
      { title: 'AI Audience Targeting', description: 'Machine learning models identify and reach your highest-value audience segments across channels.' },
      { title: 'Cross-Channel Delivery', description: 'Unified campaigns across display, video, native, CTV, and mobile in-app environments.' },
      { title: 'Brand Safety Controls', description: 'Contextual filtering and third-party verification ensure your ads appear in brand-safe environments.' },
      { title: 'Transparent Reporting', description: 'Real-time dashboards with full impression-level transparency and attribution modelling.' },
      { title: 'Continuous Optimisation', description: 'Automated bid and creative optimisation that improves performance throughout the campaign lifecycle.' }
    ]
  },
  {
    id: 'email',
    icon: 'mail',
    eyebrow: 'EMAIL MARKETING',
    title: 'Campaigns That Convert, Sequences That Retain',
    description: 'We design and deploy email programmes that move people — from first touch to loyal customer. Our team handles strategy, copywriting, design, automation, and deliverability so every send counts.',
    stats: [
      { value: '45%', label: 'Average Open Rate' },
      { value: '8.7%', label: 'Average Click Rate' },
      { value: '500M+', label: 'Emails Sent' }
    ],
    reverse: true,
    features: [
      { title: 'Automated Drip Sequences', description: 'Behaviour-triggered journeys that nurture leads and onboard customers without manual effort.' },
      { title: 'Broadcast Campaigns', description: 'High-impact sends for product launches, promotions, and announcements — built to land in the inbox.' },
      { title: 'Segmentation & Personalisation', description: 'Dynamic content and audience segmentation that makes every email feel one-to-one.' },
      { title: 'Deliverability Management', description: 'Domain warming, authentication setup, and list hygiene to protect your sender reputation.' },
      { title: 'A/B & Multivariate Testing', description: 'Systematic testing of subject lines, content, and send times to continuously lift performance.' },
      { title: 'Analytics & Reporting', description: 'Full-funnel attribution from open to conversion, with actionable insights after every campaign.' }
    ]
  },
  {
    id: 'web',
    icon: 'globe',
    eyebrow: 'WEB DESIGN & DEVELOPMENT',
    title: 'Websites Built for Performance and Conversion',
    description: 'We build fast, accessible, and visually compelling digital experiences — from marketing sites to complex web applications. Every project is engineered for speed, SEO, and conversion from the ground up.',
    stats: [
      { value: '200+', label: 'Sites Launched' },
      { value: '< 1.5s', label: 'Average Load Time' },
      { value: '99.9%', label: 'Uptime SLA' }
    ],
    reverse: false,
    features: [
      { title: 'UX & UI Design', description: 'Research-led design that balances aesthetics with usability, guiding visitors toward conversion.' },
      { title: 'High-Performance Development', description: 'Modern tech stacks optimised for Core Web Vitals, SEO, and lightning-fast load times.' },
      { title: 'Conversion Rate Optimisation', description: 'Landing pages and user flows designed and tested to maximise lead generation and sales.' },
      { title: 'CMS Integration', description: 'Headless and traditional CMS setups that give your team full content control without developer dependency.' },
      { title: 'E-commerce Solutions', description: 'Custom storefronts and checkout experiences built for scale, with seamless payment integration.' },
      { title: 'Ongoing Support & Maintenance', description: 'Proactive monitoring, security updates, and iterative improvements to keep your site performing.' }
    ]
  },
  {
    id: 'branding',
    icon: 'palette',
    eyebrow: 'BRANDING & STRATEGY',
    title: 'Brands That Stand Out and Last',
    description: 'We craft cohesive brand identities and go-to-market strategies that position you ahead of the competition. From naming and visual identity to messaging frameworks and launch plans, we build brands with purpose.',
    stats: [
      { value: '150+', label: 'Brands Built' },
      { value: '15+', label: 'Countries' },
      { value: 'Full-Spectrum', label: 'Brand Systems' }
    ],
    reverse: true,
    features: [
      { title: 'Brand Identity Design', description: "Logo, colour palette, typography, and visual language that communicate your brand's essence." },
      { title: 'Brand Strategy', description: 'Positioning, differentiation, and competitive analysis that define where your brand plays and how it wins.' },
      { title: 'Messaging & Tone of Voice', description: 'Clear, consistent messaging frameworks and copy guidelines that unify every customer touchpoint.' },
      { title: 'Go-to-Market Planning', description: 'Launch strategies that align product, marketing, and sales for maximum market impact.' },
      { title: 'Brand Guidelines', description: 'Comprehensive brand books that ensure consistency across every team, agency, and channel.' },
      { title: 'Rebranding & Refresh', description: 'Strategic evolution of existing brands — preserving equity while modernising for new audiences.' }
    ]
  }
];
