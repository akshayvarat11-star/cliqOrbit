import { Component } from '@angular/core';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-about',
  imports: [CtaSection],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
