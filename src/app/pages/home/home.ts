import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrbitGraphic } from '../../shared/components/orbit-graphic/orbit-graphic';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  imports: [RouterLink, OrbitGraphic, CtaSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
