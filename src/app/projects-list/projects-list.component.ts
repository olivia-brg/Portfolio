import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../models/project-card';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { ProjectsService } from '../services/projects.service';
import { SingleProjectCardComponent } from "../single-project-card/single-project-card.component";

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    ProjectCardComponent,
    CommonModule,
    SingleProjectCardComponent
],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})

export class ProjectsListComponent implements OnInit {

  projectCards!: ProjectCard[];

  constructor(
    private projectsService: ProjectsService,
  ) {}

  ngOnInit(): void {
    this.projectCards = this.projectsService.getProjectCards();
  }
}