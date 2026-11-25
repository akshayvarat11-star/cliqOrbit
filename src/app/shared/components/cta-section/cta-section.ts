import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { input } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  imports: [RouterLink],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss',
})
export class CtaSection {
  heading = input.required<string>();
  paragraph = input.required<string>();
  button = input.required<string>();
  secondary = input<string>();
  showStats = input(false);
}
