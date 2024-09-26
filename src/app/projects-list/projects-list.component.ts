import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../models/project-card';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { ProjectsService } from '../services/projects.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})

export class ProjectsListComponent implements OnInit{

  projectCards!: ProjectCard[];

  constructor(
    private projectsService: ProjectsService,
  ) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {

    this.projectCards = this.projectsService.getProjectCards();
  }



  ngAfterViewInit(): void {
    // Après que la vue soit initialisée, on applique GSAP aux éléments
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    let panels = gsap.utils.toArray('.panel') as HTMLElement[]; // Sélectionne les panneaux

    // Crée un ScrollTrigger pour chaque panel afin de suivre leur position de départ
    let tops = panels.map(panel => ScrollTrigger.create({
      trigger: panel,
      start: "top top"
    }));

    // Piner chaque panel
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false
      });
    });

    // Snap entre les panels
    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          let panelStarts = tops.map(st => st.start),
              snapScroll = gsap.utils.snap(panelStarts, self!.scroll());
          return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
        },
        duration: 0.5
      }
    });
  }
  
}
