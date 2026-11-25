import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  template: `<article class="feature-card"><span class="check" aria-hidden="true">✓</span><div class="copy"><h3>{{ title() }}</h3><p>{{ description() }}</p></div></article>`,
  styleUrl: './feature-card.scss'
})
export class FeatureCard {
  title = input.required<string>();
  description = input.required<string>();
}
