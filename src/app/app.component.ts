import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectCard } from './models/project-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  projectCards!: ProjectCard[];

  chatGrin!: ProjectCard;
  dontTriggerMe!: ProjectCard;
  dashboard!: ProjectCard;

  ngOnInit(): void {

    this.projectCards = [
      new ProjectCard(
        `Chat Grin`,
        `Group project`,
        `Platformer game coded in LUA on the fantasy console PICO-8.`,
        new Date('2024-06'),
        `https://store-images.s-microsoft.com/image/apps.40391.13915115277924383.ab2daab8-cb71-4e1a-ad73-9e4a3e87c3f3.960a3fa2-5987-49b8-9d15-602af0a1ff93`
      ),
      new ProjectCard(
        `Dashboard`,
        `Group project`,
        `A web dashboard project that was created to help us learn how to work with APIs. We integrated a news API to display the latest headlines, a map showing Bicloo bike stations that displays available bikes or parking spots, and NASA's image API to feature an awesome, daily-changing background that can also run as a slideshow. Additionally, we included an API that shows upcoming public holidays for quick reference.`,
        new Date('2024-07'),
        `https://www.stockvault.net/data/2016/08/20/208059/preview16.jpg`
      ),
      new ProjectCard(
        `Don't Trigger Me`,
        `Group project`,
        `A Chrome extension that provides customizable trigger warnings by automatically censoring specific words or phrases on web pages you visit. Users can choose from pre-defined categories or manually add words they'd prefer to avoid, creating a safer and more comfortable browsing experience tailored to their needs.`,
        new Date('2024-08'),
        `https://jf-blog.fr/wp-content/uploads/2021/11/Google-Chrome-Extensions.jpg`
      )
    ];

    this.projectCards[0].setDevelopmentTime('Less than 2 weeks');
  }
}
