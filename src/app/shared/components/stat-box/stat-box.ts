import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-box',
  standalone: true,
  template: `<article class="stat-box"><strong [class.wide]="value().length > 8">{{ value() }}</strong><span>{{ label() }}</span></article>`,
  styleUrl: './stat-box.scss'
})
export class StatBox {
  value = input.required<string>();
  label = input.required<string>();
}
