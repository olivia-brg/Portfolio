import { Injectable } from "@angular/core";
import { ProjectCard } from "../models/project-card";

@Injectable({
    providedIn: 'root',
})

export class ProjectsService {

    private projectCards: ProjectCard[] = [
        new ProjectCard(
          `Chat Grin`,
          `Group project`,
          `Platformer game coded in LUA on the fantasy console PICO-8.`,
          new Date('2024-06'),
          `./assets/images/chatgrin.png`
        )
        .withDevelopmentTime('Less than 2 weeks')
        .withFullDescription('The goal of this project was to make us understand many fundamentals concept of programming (from physics to architecture) and learning to work with other people. We had to think about how could we work in different files and merge it (without git since it was the first project), how to efficiently communicate and so on...'),
        new ProjectCard(
          `Dashboard`,
          `Group project`,
          `A web dashboard project that was created to help us learn how to work with APIs. We integrated a news API to display the latest headlines, a map showing Bicloo bike stations that displays available bikes or parking spots, and NASA's image API to feature an awesome, daily-changing background that can also run as a slideshow. Additionally, we included an API that shows upcoming public holidays for quick reference.`,
          new Date('2024-07'),
          `https://www.stockvault.net/data/2016/08/20/208059/preview16.jpg`
        ).withDevelopmentTime('Less than 2 weeks'),
        new ProjectCard(
          `Don't Trigger Me`,
          `Group project`,
          `A Chrome extension that provides customizable trigger warnings by automatically censoring specific words or phrases on web pages you visit. Users can choose from pre-defined categories or manually add words they'd prefer to avoid, creating a safer and more comfortable browsing experience tailored to their needs.`,
          new Date('2024-08'),
          `https://jf-blog.fr/wp-content/uploads/2021/11/Google-Chrome-Extensions.jpg`
        ).withDevelopmentTime('Less than 2 weeks'),
        new ProjectCard(
          `Chat Grin`,
          `Group project`,
          `Platformer game coded in LUA on the fantasy console PICO-8.`,
          new Date('2024-06'),
          `./assets/images/chatgrin.png`
        )
        .withDevelopmentTime('Less than 2 weeks')
        .withFullDescription('The goal of this project was to make us understand many fundamentals concept of programming (from physics to architecture) and learning to work with other people. We had to think about how could we work in different files and merge it (without git since it was the first project), how to efficiently communicate and so on...'),
        new ProjectCard(
          `Dashboard`,
          `Group project`,
          `A web dashboard project that was created to help us learn how to work with APIs. We integrated a news API to display the latest headlines, a map showing Bicloo bike stations that displays available bikes or parking spots, and NASA's image API to feature an awesome, daily-changing background that can also run as a slideshow. Additionally, we included an API that shows upcoming public holidays for quick reference.`,
          new Date('2024-07'),
          `https://www.stockvault.net/data/2016/08/20/208059/preview16.jpg`
        ).withDevelopmentTime('Less than 2 weeks'),
        new ProjectCard(
          `Don't Trigger Me`,
          `Group project`,
          `A Chrome extension that provides customizable trigger warnings by automatically censoring specific words or phrases on web pages you visit. Users can choose from pre-defined categories or manually add words they'd prefer to avoid, creating a safer and more comfortable browsing experience tailored to their needs.`,
          new Date('2024-08'),
          `https://jf-blog.fr/wp-content/uploads/2021/11/Google-Chrome-Extensions.jpg`
        ).withDevelopmentTime('Less than 2 weeks'),
        new ProjectCard(
          `Chat Grin`,
          `Group project`,
          `Platformer game coded in LUA on the fantasy console PICO-8.`,
          new Date('2024-06'),
          `./assets/images/chatgrin.png`
        )
        .withDevelopmentTime('Less than 2 weeks')
        .withFullDescription('The goal of this project was to make us understand many fundamentals concept of programming (from physics to architecture) and learning to work with other people. We had to think about how could we work in different files and merge it (without git since it was the first project), how to efficiently communicate and so on...'),
        new ProjectCard(
          `Dashboard`,
          `Group project`,
          `A web dashboard project that was created to help us learn how to work with APIs. We integrated a news API to display the latest headlines, a map showing Bicloo bike stations that displays available bikes or parking spots, and NASA's image API to feature an awesome, daily-changing background that can also run as a slideshow. Additionally, we included an API that shows upcoming public holidays for quick reference.`,
          new Date('2024-07'),
          `https://www.stockvault.net/data/2016/08/20/208059/preview16.jpg`
        ).withDevelopmentTime('Less than 2 weeks'),
        new ProjectCard(
          `Don't Trigger Me`,
          `Group project`,
          `A Chrome extension that provides customizable trigger warnings by automatically censoring specific words or phrases on web pages you visit. Users can choose from pre-defined categories or manually add words they'd prefer to avoid, creating a safer and more comfortable browsing experience tailored to their needs.`,
          new Date('2024-08'),
          `https://jf-blog.fr/wp-content/uploads/2021/11/Google-Chrome-Extensions.jpg`
        ).withDevelopmentTime('Less than 2 weeks'),
      ];

      // create shallow copy to not modify original array
      getProjectCards(): ProjectCard[] {
        return[...this.projectCards]
      }

      getProjectCardById(projectCardId: string): ProjectCard {
        const foundProjectCard = this.projectCards.find(ProjectCard => ProjectCard.id === projectCardId);
        if (!foundProjectCard) {
          throw new Error('Project not found!');
        }
        return foundProjectCard;
      }
};