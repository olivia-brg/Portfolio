import { Component, OnInit } from '@angular/core';
import { HomepageSectionComponent } from "../homepage-section/homepage-section.component";
import { HomepageSection } from '../models/homepage-section';
import { HomepageSectionService } from '../services/homepage-section.service';
import { ContactComponent } from "../contact/contact.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HomepageSectionComponent,
    ContactComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {


  homepageSections!: HomepageSection[];

  constructor(
    private homepageSectionService: HomepageSectionService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.homepageSections = this.homepageSectionService.getHomepageSections();
  }

  onContactClick() {
    this.router.navigateByUrl('contact');
  }
}
