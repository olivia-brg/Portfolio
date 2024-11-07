import { Injectable } from "@angular/core";
import { ProjectCard } from "../models/project-card";

@Injectable({
  providedIn: 'root',
})

export class ProjectsService {

  private projectCards: ProjectCard[] = [

    new ProjectCard(
      `Site de vente`,
      `Projet en groupe`,
      [`Création d'un projet fullstack (SpringBoot, Angular, Tailwind, MySQL)`],
      new Date('2024-10'),
      `https://jf-blog.fr/wp-content/uploads/2021/11/Google-Chrome-Extensions.jpg`
    ).withGitLink('https://github.com/adatechschool/projet-collectif-reseau-social-php-olnaye-long')
      .withFullDescription([
        `Pour ce projet, nous avons décider d'utiliser des technos très communes a Nantes (java / angular). La première difficulté à été d'initialiser le projet`,
        ``
      ]),

    new ProjectCard(
      `Reseau social`,
      `Projet en groupe`,
      [`- Récupération d'un projet en PHP`,`- Refactorisation`,`- Ajout de features`],
      new Date('2024-10'),
      `https://jf-blog.fr/wp-content/uploads/2021/11/Google-Chrome-Extensions.jpg`
    ).withGitLink('https://github.com/adatechschool/projet-collectif-reseau-social-php-olnaye-long')
      .withFullDescription([
        `Je suis partie d'un exercice fait à Ada tech school, pour lequel on devait coder un algorithme simulant une partie de poker. J'ai décidé de pousser l'exercice plus loin en ayant une approche orientée objet.`,
        ``
      ]),

    new ProjectCard(
      `Poker`,
      `Projet perso`,
      [`Jeu de poker coder en java, jouable en CLI.`],
      new Date('2024-10'),
      `https://jf-blog.fr/wp-content/uploads/2021/11/Google-Chrome-Extensions.jpg`
    ).withGitLink('https://github.com/olivia-brg/Poker')
      .withFullDescription([
        `Je suis partie d'un exercice fait à Ada tech school, pour lequel on devait coder un algorithme simulant une partie de poker. J'ai décidé de pousser l'exercice plus loin en ayant une approche orientée objet.`,
        ``
      ]),

    new ProjectCard(
      `Don't Trigger Me`,
      `Projet en groupe`,
      [`Extension chrome qui permet de censurer des pages par catégories (agression, viol etc), ou en y entrant nos propre "trigger words".`],
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
      [`A web dashboard project that was created to help us learn how to work with APIs. We integrated a news API to display the latest headlines, a map showing Bicloo bike stations that displays available bikes or parking spots, and NASA's image API to feature an awesome, daily-changing background that can also run as a slideshow. Additionally, we included an API that shows upcoming public holidays for quick reference.`],
      new Date('2024-07'),
      `https://www.stockvault.net/data/2016/08/20/208059/preview16.jpg`
    ).withDevelopmentTime('Less than 2 weeks')
      .withGitLink('https://github.com/olivia-brg/Dashboard'),

    new ProjectCard(
      `Chat Grin`,
      `Group project`,
      [`Jeu de plateforme codé en LUA sur 8`],
      new Date('2024-06'),
      `./assets/images/chatgrin.png`
    )
      .withDevelopmentTime('Less than 2 weeks')
      .withFullDescription([`L'objectif de ce projet était de nous faire utilser les concepts fondamentaux de la programmation (boucles, conditions, variables) et d'appréhender des concepts plus poussé (physique d'un jeu, architeture)...`,
        `Nous avons aussi du apprendre a gérer un projet en groupe, ce qui nous a demandé un temps d'adaptation car c'était une première de travailler à plusieurs sur un même code. Nous avons du réfléchir à comment on pouvait travailler sur différents pc et comment nous devions unifier notre travail (puisque qu'étant notre premier projet nous ne maitrisions absolument pas git), et nous avons aussi dû apprendre à communiquer éfficacement.`,
      `Pour la partie plus technique`])
      .withGitLink('https://github.com/olivia-brg/Chat_grin')
      .withOtherImagesPath(
        `./assets/images/test-chatgrin.jpg` , 2
      ),

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