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
    ).withDevelopmentTime(`Environ 7 jours`)
    .withGitLink('https://github.com/adatechschool/projet-collectif-reseau-social-php-olnaye-long')
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
    ).withDevelopmentTime('Environ 7 jours')
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
      `Projet en équipe`,
      [`Projet de page web de type dashboard qui affiche des données dynamiquement, grâce à l'utilisation d'API. Nous y avons intégré un affichage de site de news, une carte de Bicloo, ainsi qu'une API de fond d'ecran provenant de la NASA. Nous y avons aussi ajouté une API pour afficher les jours férié.`],
      new Date('2024-07'),
      `./assets/images/projects/dashboard/Dashboard-cover.jpg`
    ).withDevelopmentTime('Environ 7 jours')
      .withGitLink('https://github.com/olivia-brg/Dashboard')
      .withFullDescription([
        ``
      ]),

    new ProjectCard(
      `Chat Grin`,
      `Projet d'école en équipe`,
      [`Jeu de plateforme codé en LUA sur PICO 8`],
      new Date('2024-06'),
      `./assets/images/chatgrin.png`
    )
      .withDevelopmentTime('Environ 7 jours')
      .withFullDescription([
        `L'objectif de ce projet était de nous faire utilser les concepts fondamentaux de la programmation (boucles, conditions, variables) et d'appréhender des concepts plus poussé (physique d'un jeu, architeture)...`,
        `Nous avons aussi du apprendre a gérer un projet en groupe, ce qui nous a demandé un temps d'adaptation car c'était une première de travailler à plusieurs sur un même code. Nous avons du réfléchir à comment on pouvait travailler sur différents pc et comment nous devions unifier notre travail (puisque qu'étant notre premier projet nous ne maitrisions absolument pas git). Nous avons également dû apprendre à communiquer éfficacement.`,
        `Pour la partie plus technique : nous avons souhaité nous challenger. Nous avons préféré un jeu de plateforme à un jeu type "asteroid" ou autres jeu ayant une physique / déplacement plus limité. Ca nous a appris à pousser certain concept, comme le mouvement, l'animation, les collisions, etc et nous a donné des bonnes bases en algorythmie`,
        `Malgrès le fait que ce soit le premier projet en équipe, et que nous ayons eu des difficulté d'adaptation sur les premiers jours, le projet s'est bien passé et nous sommes fier du résultat obtenu, notemment avec le peu de connaissance que nous avions.`,
    ])
      .withGitLink('https://github.com/olivia-brg/Chat_grin')
      .withOtherImagesPath(
        `./assets/images/test-chatgrin.jpg` , 0
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