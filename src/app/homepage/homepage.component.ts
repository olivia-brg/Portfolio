import { Component } from '@angular/core';
import { HomepageSectionComponent } from "../homepage-section/homepage-section.component";
import { HomepageSection } from '../models/homepage-section';
import { HomepageSectionService } from '../services/homepage-section.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HomepageSectionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {


  homepageSections!: HomepageSection[];

  constructor(
    private homepageSectionService: HomepageSectionService,
  ) {}


  ngOnInit(): void {

    this.homepageSections = this.homepageSectionService.getHomepageSections();
    
  }
}
