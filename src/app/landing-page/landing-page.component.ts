import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TxtType } from './text-type';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent implements AfterViewInit {
  
  @ViewChild('typewriter') typewriterElement!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    const toRotate = this.typewriterElement.nativeElement.getAttribute('data-type');
    const period = parseInt(this.typewriterElement.nativeElement.getAttribute('data-period') || '2000', 10);

    if (toRotate) {
      new TxtType(this.typewriterElement.nativeElement, JSON.parse(toRotate), period);
    }
  }

  onContinue() {
    this.router.navigateByUrl('home');
  }
}
