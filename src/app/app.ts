import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Header } from './core/layout/header/header';
import { Footer } from './core/layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  private routerSubscription?: Subscription;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        window.setTimeout(() => {
          const fragmentIndex = this.router.url.indexOf('#');
          if (fragmentIndex >= 0) {
            const fragment = this.router.url.slice(fragmentIndex + 1);
            document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }
}
