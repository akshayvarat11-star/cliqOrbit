import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../data/services.data';
import { ServiceSection } from './service-section';

@Component({
  selector: 'app-services',
  imports: [RouterLink, ServiceSection],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  readonly sections = SERVICES;

  ngOnInit(): void {
    this.title.setTitle('Services | CliqOrbit');
    this.meta.updateTag({
      name: 'description',
      content: 'From programmatic advertising to brand strategy, we engineer every service for measurable performance and lasting growth.'
    });
  }
}
