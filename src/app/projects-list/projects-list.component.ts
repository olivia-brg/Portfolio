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
}