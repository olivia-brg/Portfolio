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

  // ngAfterViewInit(): void {
  //   const cards = gsap.utils.toArray(".single-card") as HTMLElement[]; // select all .single-card elements

  //   cards.forEach((card, index) => {
  //     const tween = gsap.to(card, {
  //       scrollTrigger: {
  //         trigger: card,
  //         start: () => `top top+=300`,
  //         end: () => `top top+=150`,
  //         scrub: false,
  //         markers: true,
  //         invalidateOnRefresh: true
  //       },
  //       ease: "power1.out",
  //       scale: () => 1 - (cards.length - index) * 0.025
  //     });

  //     ScrollTrigger.create({
  //       trigger: card,
  //       start: "top top+=150",
  //       pin: true,
  //       anticipatePin: 1,
  //       pinSpacing: false,
  //       markers: false,
  //       id: 'pin',
  //       end: 'max',
  //       invalidateOnRefresh: true,
  //     });
  //   });
  // }
  
}