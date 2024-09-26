import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../models/project-card';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-single-project-card',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-project-card.component.html',
  styleUrl: './single-project-card.component.scss'
})

export class SingleProjectCardComponent implements OnInit {

  projectCard!: ProjectCard;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
  ) {};

  ngOnInit(): void {
    this.getProject();
  }
  
  private getProject() {
    const projectId = this.route.snapshot.params['id'];
    this.projectCard = this.projectsService.getProjectCardById(projectId);
  }
}
