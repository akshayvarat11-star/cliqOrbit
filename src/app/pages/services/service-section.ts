import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceSection as ServiceSectionData } from '../../data/services.data';
import { StatBox } from '../../shared/components/stat-box/stat-box';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [RouterLink, StatBox, FeatureCard],
  template: `
    <section [id]="service().id" class="service-section" [class.reverse]="service().reverse">
      <div class="container service-grid">
        <div class="service-info">
          <div class="eyebrow-row">
            <div class="icon-box" [attr.aria-label]="service().icon">
              @if (service().icon === 'zap') { <span aria-hidden="true">⚡</span> }
              @if (service().icon === 'mail') { <span aria-hidden="true">✉</span> }
              @if (service().icon === 'globe') { <span aria-hidden="true">◎</span> }
              @if (service().icon === 'palette') { <span aria-hidden="true">◉</span> }
            </div>
            <span class="eyebrow">{{ service().eyebrow }}</span>
          </div>
          <h2>{{ service().title }}</h2>
          <p class="description">{{ service().description }}</p>
          <div class="stats">
            @for (stat of service().stats; track stat.label) {
              <app-stat-box [value]="stat.value" [label]="stat.label" />
            }
          </div>
          <a class="primary-btn" routerLink="/contact">Get Started →</a>
        </div>
        <ul class="feature-grid" aria-label="{{ service().eyebrow }} features">
          @for (feature of service().features; track feature.title) {
            <li><app-feature-card [title]="feature.title" [description]="feature.description" /></li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './service-section.scss'
})
export class ServiceSection {
  service = input.required<ServiceSectionData>();
}
