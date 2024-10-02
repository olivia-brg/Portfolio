import { Component, OnInit } from '@angular/core';
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

    if (underline) {
      navLinks.forEach((link: HTMLAnchorElement) => {
        link.addEventListener('click', (e: MouseEvent) => {
          const target = e.target as HTMLAnchorElement;
          const linkWidth = target.offsetWidth;
          const linkLeft = target.offsetLeft;

          underline.style.width = `${linkWidth}px`;
          underline.style.left = `${linkLeft}px`;
        });
      });
    }
  }

}
