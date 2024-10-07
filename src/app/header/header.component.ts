import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-link');
    const underline: HTMLElement | null = document.querySelector('.underline');
    const defaultLink: HTMLAnchorElement | null = document.querySelector('#accueil');

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
            console.log(target);

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


  private isDarkMode = false;

  constructor(private renderer: Renderer2) {
    // Vérifie si un thème est déjà sauvegardé dans le localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark-mode';
      this.setDarkMode(this.isDarkMode);
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.setDarkMode(this.isDarkMode);

    // Sauvegarde la préférence de l'utilisateur dans le localStorage
    localStorage.setItem('theme', this.isDarkMode ? 'dark-mode' : 'light-mode');
  }

  private setDarkMode(isDark: boolean): void {
    if (isDark) {
      this.renderer.addClass(document.body, 'dark-mode');
      this.renderer.removeClass(document.body, 'light-mode'); // Au cas où 'light-mode' est appliqué
    } else {
      this.renderer.addClass(document.body, 'light-mode');
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}
