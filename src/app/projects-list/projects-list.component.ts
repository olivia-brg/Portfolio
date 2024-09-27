import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../models/project-card';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { ProjectsService } from '../services/projects.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    ProjectCardComponent,
    CommonModule
  ],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})

export class ProjectsListComponent implements OnInit {

  projectCards!: ProjectCard[];

  constructor(
    private projectsService: ProjectsService,
  ) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {

    this.projectCards = this.projectsService.getProjectCards();
  }

  // Stacking cards code

  ngAfterViewInit(): void {
    const cards = gsap.utils.toArray(".single-card") as HTMLElement[]; // Sélectionne tous les éléments .card

    cards.forEach((card, index) => {
      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=100`,
          end: () => `top top+=40`,
          scrub: true,
          markers: true, // Active les marqueurs de ScrollTrigger pour déboguer
          invalidateOnRefresh: true // Recalcule les positions lorsque la fenêtre est redimensionnée
        },
        ease: "none", // Pas d'effet d'accélération
        scale: () => 1 - (cards.length - index) * 0.025 // Diminue l'échelle en fonction de l'index
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true, // Épingle l'élément lorsque le haut du card atteint le haut de la page
        pinSpacing: false, // Pas d'espace réservé lorsque l'élément est épinglé
        markers: false, // Pour déboguer avec des marqueurs visuels
        id: 'pin', // Identifiant pour cette animation ScrollTrigger
        end: 'max', // L'épingle dure jusqu'à ce que l'utilisateur ait scrollé jusqu'à la fin du contenu
        invalidateOnRefresh: true, // Réinitialise les valeurs lorsque la page est redimensionnée
      });
    });

  }
}