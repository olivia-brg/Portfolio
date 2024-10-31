import { Injectable } from "@angular/core";
import { ProjectCard } from "../models/project-card";

@Injectable({
  providedIn: 'root',
})

export class ProjectsService {

  private projectCards: ProjectCard[] = [

    new ProjectCard(
      `Poker`,
      `Projet perso`,
      `fezzzzzzzzzk, ze,mkneztmo lkertmjrelgk .`,
      new Date('2024-08'),
      `https://jf-blog.fr/wp-content/uploads/2021/11/Google-Chrome-Extensions.jpg`
    ).withDevelopmentTime('Moins de 2 semaines')
      .withGitLink('https://github.com/olivia-brg/Don-t_Trigger_Me')
      .withFullDescription([
        `L'objectif de ce projet était de travailler sur l'asynchrone, manipuler le DOM, et utiliser l'API chrome.`,
        `L'idée m'est venu car nous étions submerger par les information sur les viols de Mazan au moment du lancement du projet. Nous avons donc souhaité faire une extension qui puisse protéger des internautes sensibles à certains sujets.`,
        `Nous avons commencer en structurant le projet et avec un code existant, dont nous avons retro enginerer le fonctionnement. Une fois bien assimiler, nous nous sommes debarasser des feature dont nous n'avions pas besoin afin de garder les fonctions centrale à notre projet : la capacité de remplacer les mot d'une liste donnée sur la page active.`,
        `Le principe se décompose en plusieurs élément. Le premier est de fournir la liste, qui pour le moment est coder en dur. Il fallait également que l'extension soit capable d'analyser tout le code HTML présent avec un craller. Grâce à ça, la troisième partie du programme allait remplacer dynamique les lettres des mots concordant avec sa "base de donnée" avec des astérisques.`,
        `Pendant que mes collègues travaillaient sur la possibilité d'ajouter manuellement des mots, j'ai commencer à générer un JSON comportant différentes catégories et sous catégorie qui me servirait a ajouter des liste entière de mot et de leurs dérivés.`
      ]),

    new ProjectCard(
      `Don't Trigger Me`,
      `Projet en groupe`,
      `Extension chrome qui permet de censurer des pages par catégories (agression, viol etc), ou en y entrant nos propre "trigger words".`,
      new Date('2024-08'),
      `https://jf-blog.fr/wp-content/uploads/2021/11/Google-Chrome-Extensions.jpg`
    ).withDevelopmentTime('Moins de 2 semaines')
      .withGitLink('https://github.com/olivia-brg/Don-t_Trigger_Me')
      .withFullDescription([
        `L'objectif de ce projet était de travailler sur l'asynchrone, manipuler le DOM, et utiliser l'API chrome.`,
        `L'idée m'est venu car nous étions submerger par les information sur les viols de Mazan au moment du lancement du projet. Nous avons donc souhaité faire une extension qui puisse protéger des internautes sensibles à certains sujets.`,
        `Nous avons commencer en structurant le projet et avec un code existant, dont nous avons retro enginerer le fonctionnement. Une fois bien assimiler, nous nous sommes debarasser des feature dont nous n'avions pas besoin afin de garder les fonctions centrale à notre projet : la capacité de remplacer les mot d'une liste donnée sur la page active.`,
        `Le principe se décompose en plusieurs élément. Le premier est de fournir la liste, qui pour le moment est coder en dur. Il fallait également que l'extension soit capable d'analyser tout le code HTML présent avec un craller. Grâce à ça, la troisième partie du programme allait remplacer dynamique les lettres des mots concordant avec sa "base de donnée" avec des astérisques.`,
        `Pendant que mes collègues travaillaient sur la possibilité d'ajouter manuellement des mots, j'ai commencer à générer un JSON comportant différentes catégories et sous catégorie qui me servirait a ajouter des liste entière de mot et de leurs dérivés.`
      ]),

    new ProjectCard(
      `Dashboard`,
      `Group project`,
      `A web dashboard project that was created to help us learn how to work with APIs. We integrated a news API to display the latest headlines, a map showing Bicloo bike stations that displays available bikes or parking spots, and NASA's image API to feature an awesome, daily-changing background that can also run as a slideshow. Additionally, we included an API that shows upcoming public holidays for quick reference.`,
      new Date('2024-07'),
      `https://www.stockvault.net/data/2016/08/20/208059/preview16.jpg`
    ).withDevelopmentTime('Less than 2 weeks')
      .withGitLink('https://github.com/olivia-brg/Dashboard'),

    new ProjectCard(
      `Chat Grin`,
      `Group project`,
      `Platformer game coded in LUA on the fantasy console PICO-8.`,
      new Date('2024-06'),
      `./assets/images/chatgrin.png`
    )
      .withDevelopmentTime('Less than 2 weeks')
      .withFullDescription(['The goal of this project was to make us understand many fundamentals concept of programming (from physics to architecture) and learning to work with other people. We had to think about how could we work in different files and merge it (without git since it was the first project), how to efficiently communicate and so on...'])
      .withGitLink('https://github.com/olivia-brg/Chat_grin'),

  ];

  // create shallow copy to not modify original array
  getProjectCards(): ProjectCard[] {
    return [...this.projectCards]
  }

  getProjectCardById(projectCardId: string): ProjectCard {
    const foundProjectCard = this.projectCards.find(ProjectCard => ProjectCard.id === projectCardId);
    if (!foundProjectCard) {
      throw new Error('Project not found!');
    }
    return foundProjectCard;
  }
};