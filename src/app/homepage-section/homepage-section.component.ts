import { HomepageSection } from '../models/homepage-section';
import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-homepage-section',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './homepage-section.component.html',
  styleUrl: './homepage-section.component.scss'
})

export class HomepageSectionComponent {

  @Input() homepageSection!: HomepageSection;
}
