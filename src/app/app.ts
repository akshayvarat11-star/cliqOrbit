import { CommonModule } from '@angular/common';
import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  readonly navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Programmatic', href: '#programmatic' },
    { label: 'AI & Automation', href: '#ai-automation' },
    { label: 'Technology', href: '#technology' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  readonly orbitNodes = [
    {
      label: 'Audience Signals',
      description:
        'First-party intent, media behavior, and contextual data are translated into actionable audience intelligence.',
      style: '--radius: 228px; --duration: 19s; --delay: -2s; --phase: 0deg;'
    },
    {
      label: 'AI Intelligence',
      description:
        'Models identify patterns, score opportunities, and turn fragmented signals into clear marketing actions.',
      style: '--radius: 248px; --duration: 22s; --delay: -6s; --phase: 48deg;'
    },
    {
      label: 'Campaign Activation',
      description:
        'Strategic media, automation, and creative are activated against the highest-value segments and channels.',
      style: '--radius: 270px; --duration: 25s; --delay: -10s; --phase: 116deg;'
    },
    {
      label: 'Lead Generation',
      description:
        'Qualified demand flows into optimized experiences, nurture paths, and conversion-focused journeys.',
      style: '--radius: 238px; --duration: 21s; --delay: -3s; --phase: 180deg;'
    },
    {
      label: 'Performance Insights',
      description:
        'Measurement loops feed learning back into targeting, spend, and experimentation for ongoing improvement.',
      style: '--radius: 258px; --duration: 23s; --delay: -8s; --phase: 240deg;'
    },
    {
      label: 'Programmatic Media',
      description:
        'Spend is orchestrated across premium inventory, contextual buys, and performance channels with precision.',
      style: '--radius: 210px; --duration: 17s; --delay: -1s; --phase: 300deg;'
    },
    {
      label: 'Growth Automation',
      description:
        'Lifecycle journeys, messaging, and conversion paths are automated to accelerate measurable growth.',
      style: '--radius: 286px; --duration: 28s; --delay: -13s; --phase: 340deg;'
    },
    {
      label: 'Creative Strategy',
      description:
        'Messaging systems and experiences are shaped around the strongest audience signals and business intent.',
      style: '--radius: 248px; --duration: 20s; --delay: -5s; --phase: 68deg;'
    },
    {
      label: 'Brand Lift',
      description:
        'Brand equity grows through meaningful reach, resonance, and conversion-ready audience attention.',
      style: '--radius: 274px; --duration: 26s; --delay: -12s; --phase: 150deg;'
    }
  ];

  readonly capabilityStages = [
    {
      title: 'Audience Signals',
      short: 'Intent, context, and media behavior create the first layer of insight.',
      detail:
        'We map relevant audiences using digital behavior, campaign context, and opportunity signals to shape smarter targeting.'
    },
    {
      title: 'AI Intelligence',
      short: 'Machine learning turns noisy signals into strategic decisions.',
      detail:
        'AI models help prioritize segments, tighten audience fit, and keep optimization decisions grounded in data patterns.'
    },
    {
      title: 'Campaign Strategy',
      short: 'Creative and media planning align around measurable goals.',
      detail:
        'Strategy connects channel mix, offer design, and audience intent to a single growth narrative across channels.'
    },
    {
      title: 'Activation',
      short: 'Performance tactics launch with the right timing and message.',
      detail:
        'Campaigns and software experiences move from plan to deployment with automation, testing, and operational oversight.'
    },
    {
      title: 'Measurement',
      short: 'Performance is tracked to understand what is working and why.',
      detail:
        'Attribution, reporting, and experimentation confirm the signals behind quality conversions and efficiency.'
    },
    {
      title: 'Optimization',
      short: 'Each cycle sharpens the next move.',
      detail:
        'Signals are learned from, insights are applied, and continuous optimization creates compounding growth over time.'
    }
  ];

  readonly programmaticServices = [
    'Programmatic Media Buying',
    'Audience Intelligence & Signal Activation',
    'Real-Time Campaign Optimization',
    'Display & Video Advertising',
    'Connected TV (CTV) Advertising',
    'Digital Out-of-Home (DOOH) Advertising',
    'Performance Measurement & Attribution',
    'Publisher Monetization & Yield Optimization',
    'Advertising Technology Integration'
  ];

  readonly digitalMarketingServices = [
    'Search Engine Optimization (SEO)',
    'Search Engine Marketing (SEM)',
    'Paid Social Advertising',
    'Social Media Strategy',
    'Content Marketing',
    'Landing Page Optimization',
    'Conversion Rate Optimization (CRO)',
    'Analytics & Campaign Reporting',
    'Digital Campaign Strategy',
    'Brand & Creative Campaign Development'
  ];

  readonly technologyServices = [
    'Custom Web Application Development',
    'AI-Powered Business Applications',
    'Marketing Automation Software',
    'AI API Integration',
    'Analytics Dashboards',
    'CRM & Marketing Tool Integrations',
    'Admin Portals & Enterprise Applications',
    'Workflow Automation Systems',
    'API Development & Integration',
    'Scalable Cloud-Ready Architecture'
  ];

  readonly aiWorkflowSteps = [
    'Signal inputs',
    'AI processing',
    'Qualification',
    'Campaign action',
    'Reporting'
  ];

  readonly roadmapStages = [
    'Discover',
    'Strategize',
    'Build',
    'Activate',
    'Learn & Optimize'
  ];

  readonly teamMembers = [
    { name: 'Akshay V.', role: 'Role placeholder', intro: 'Short professional introduction placeholder.' },
    { name: 'Neha K.', role: 'Role placeholder', intro: 'Short professional introduction placeholder.' },
    { name: 'Nilam', role: 'Role placeholder', intro: 'Short professional introduction placeholder.' },
    { name: 'Surabh Das', role: 'Role placeholder', intro: 'Short professional introduction placeholder.' }
  ];

  readonly serviceOptions = [
    'Programmatic Advertising',
    'Digital Marketing',
    'AI & Marketing Automation',
    'AI Software Development',
    'Custom Web Application',
    'Publisher Monetization',
    'Ad Exchange Technology',
    'Other'
  ];

  readonly ranges = ['7D', '30D', '90D'] as const;
  readonly campaigns = ['Northstar Launch', 'Signal Lift', 'Authority Reach'];

  readonly dashboardData = {
    'Northstar Launch': {
      '7D': { impressions: 1274000, clicks: 32100, ctr: 2.52, conversions: 690, cvr: 2.15, trend: 18.2, chart: [42, 58, 63, 74, 68, 82, 94], segment: ['B2B', 'Mid-funnel', 'Retargeting', 'New visitors'] },
      '30D': { impressions: 4865000, clicks: 124900, ctr: 2.57, conversions: 2610, cvr: 2.09, trend: 22.4, chart: [48, 52, 64, 68, 76, 90, 96], segment: ['B2B', 'Retargeting', 'Intent clusters', 'High-value leads'] },
      '90D': { impressions: 13068000, clicks: 328600, ctr: 2.61, conversions: 6780, cvr: 2.06, trend: 26.8, chart: [44, 50, 62, 72, 79, 88, 97], segment: ['B2B', 'Lifecycle', 'Brand demand', 'High-fit prospects'] }
    },
    'Signal Lift': {
      '7D': { impressions: 908500, clicks: 18920, ctr: 2.08, conversions: 430, cvr: 2.27, trend: 12.1, chart: [34, 44, 51, 56, 60, 70, 76], segment: ['Audience lookalikes', 'Geo-intent', 'Low-funnel', 'Re-engagement'] },
      '30D': { impressions: 3598000, clicks: 78400, ctr: 2.17, conversions: 1750, cvr: 2.23, trend: 16.8, chart: [30, 38, 54, 62, 68, 74, 84], segment: ['Lookalikes', 'Geo-targeting', 'Video', 'Retargeting'] },
      '90D': { impressions: 10524000, clicks: 232100, ctr: 2.25, conversions: 5120, cvr: 2.2, trend: 20.9, chart: [36, 41, 48, 60, 70, 82, 90], segment: ['Intent clusters', 'Search overlap', 'LTV segments', 'Demand capture'] }
    },
    'Authority Reach': {
      '7D': { impressions: 1412000, clicks: 28850, ctr: 1.98, conversions: 520, cvr: 1.8, trend: 9.8, chart: [52, 49, 65, 68, 73, 77, 83], segment: ['Brand lift', 'Top-of-funnel', 'Discovery', 'Contextual reach'] },
      '30D': { impressions: 5204000, clicks: 109000, ctr: 2.09, conversions: 2180, cvr: 2.0, trend: 15.3, chart: [48, 57, 61, 73, 78, 81, 88], segment: ['Brand lift', 'Audience expansion', 'Contextual peers', 'Video'] },
      '90D': { impressions: 14890000, clicks: 302400, ctr: 2.11, conversions: 5830, cvr: 1.93, trend: 17.6, chart: [44, 54, 63, 72, 80, 84, 92], segment: ['Brand demand', 'Contextual reach', 'Cross-channel', 'Quality audiences'] }
    }
  };

  readonly selectedCapability = signal(this.capabilityStages[0]);
  readonly selectedNode = signal(this.orbitNodes[0]);
  readonly selectedRange = signal<(typeof this.ranges)[number]>('30D');
  readonly selectedCampaign = signal(this.campaigns[0]);
  readonly activeSection = signal('home');
  readonly mobileMenuOpen = signal(false);
  readonly isSubmitting = signal(false);
  readonly submissionMessage = signal('');

  private observer?: IntersectionObserver;

  readonly form: FormGroup<{
    fullName: FormControl<string>;
    email: FormControl<string>;
    companyName: FormControl<string>;
    serviceOfInterest: FormControl<string>;
    projectDetails: FormControl<string>;
    consent: FormControl<boolean>;
  }>;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      serviceOfInterest: ['', Validators.required],
      projectDetails: ['', [Validators.required, Validators.minLength(20)]],
      consent: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    const sections = document.querySelectorAll('section[id]');

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          this.activeSection.set(visible.target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: '-20% 0px -45% 0px'
      }
    );

    sections.forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  readonly dashboard = computed(() => {
    const campaign = this.dashboardData[this.selectedCampaign() as keyof typeof this.dashboardData];
    const range = this.selectedRange();
    return campaign[range as keyof typeof campaign];
  });

  setSelectedNode(node: (typeof this.orbitNodes)[number]) {
    this.selectedNode.set(node);
  }

  setSelectedCapability(step: (typeof this.capabilityStages)[number]) {
    this.selectedCapability.set(step);
  }

  handleNavClick(href: string) {
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);

    this.activeSection.set(sectionId);
    this.mobileMenuOpen.set(false);

    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((value) => !value);
  }

  selectCampaign(value: string) {
    this.selectedCampaign.set(value);
  }

  selectRange(range: (typeof this.ranges)[number]) {
    this.selectedRange.set(range);
  }

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);

    if (!control || !control.touched || control.pristine || control.valid) {
      return '';
    }

    if (control.hasError('required')) {
      return 'This field is required.';
    }

    if (control.hasError('email')) {
      return 'Please enter a valid work email.';
    }

    if (control.hasError('minlength')) {
      const requiredLength = control.getError('minlength')?.requiredLength ?? 0;
      return `Please enter at least ${requiredLength} characters.`;
    }

    if (control.hasError('requiredTrue')) {
      return 'Please agree to the privacy policy to continue.';
    }

    return 'Please review this field.';
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submissionMessage.set('');

    window.setTimeout(() => {
      this.isSubmitting.set(false);
      this.submissionMessage.set('Thanks — your inquiry has been queued for review.');
      this.form.reset({
        fullName: '',
        email: '',
        companyName: '',
        serviceOfInterest: '',
        projectDetails: '',
        consent: false
      });
    }, 900);
  }
}
