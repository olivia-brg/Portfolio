import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatSlideToggleModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Corrige le 'styleUrls' avec 's'
})

export class HeaderComponent implements OnInit {

  isDarkMode: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-link');
    const underline: HTMLElement | null = document.querySelector('.underline');
    const defaultLink: HTMLAnchorElement | null = document.querySelector('#accueil');

    this.initializeTheme();

    if (underline && defaultLink) {
      const defaultLinkWidth = defaultLink.offsetWidth / 2;
      const defaultLinkLeft = defaultLink.offsetLeft + defaultLinkWidth / 2;

      underline.style.width = `${defaultLinkWidth}px`;
      underline.style.left = `${defaultLinkLeft}px`;

      // delete after animation
      setTimeout(() => {
        underline.style.width = '0';
      }, 300); // 300ms -> CSS transition

      // Ajouter des écouteurs d'événements sur chaque lien de navigation
      navLinks.forEach((link: HTMLAnchorElement) => {
        link.addEventListener('click', (e: MouseEvent) => {
          const target = e.target as HTMLAnchorElement;
          if (target) {
            const linkWidth = target.offsetWidth / 2;
            const linkLeft = target.offsetLeft + linkWidth / 2;

            underline.style.width = `${linkWidth}px`;
            underline.style.left = `${linkLeft}px`;

            // delete after animation
            setTimeout(() => {
              underline.style.width = '0';
            }, 300); // 300ms -> CSS transition
          }
        });
      });
    }
  }

  toggleTheme(): void {
    // Bascule entre le mode clair et sombre
    this.isDarkMode = !this.isDarkMode;
    this.setDarkMode(this.isDarkMode);

    // Sauvegarde la préférence de l'utilisateur dans le localStorage
    localStorage.setItem('theme', this.isDarkMode ? 'dark-mode' : 'light-mode');
  }

  private setDarkMode(isDark: boolean): void {
    if (isDark) {
      this.renderer.addClass(document.body, 'dark-mode');
      this.renderer.removeClass(document.body, 'light-mode');
    } else {
      this.renderer.addClass(document.body, 'light-mode');
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

  private initializeTheme(): void {
    // Vérifie si une préférence est déjà sauvegardée dans le localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      // Applique le thème sauvegardé
      this.isDarkMode = savedTheme === 'dark-mode';
    } else {
      // Si aucune préférence, utilise le thème du navigateur
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode = prefersDarkMode;
    }

    // Applique le thème initial (issu du localStorage ou de la préférence du navigateur)
    this.setDarkMode(this.isDarkMode);
  }
}
