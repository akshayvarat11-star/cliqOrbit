import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  mobileOpen = false;
  readonly navItems = [
    { label: 'Home', route: '/' },
    { label: 'Services', route: '/services' },
    { label: 'About', route: '/about' },
    { label: 'Case Studies', route: '/portfolio' },
    { label: 'Contact', route: '/contact' }
  ];
}
