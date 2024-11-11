import { DatePipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCard } from '../models/project-card';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-single-project-card',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    NgFor
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})

export class ProjectPageComponent implements OnInit {

  @Input() projectPreview!: ProjectCard;

  projectCard!: ProjectCard;
  projectCards!: ProjectCard[];
  index: number = 0;

  constructor(
    public route: ActivatedRoute,
    private projectsService: ProjectsService,
    public router: Router,
  ) {};

  ngOnInit(): void {
    this.getProject();
  }
  
  // get the project by the dynamic ID
  private getProject() {
    const projectId = this.route.snapshot.params['id'];
    this.projectCard = this.projectsService.getProjectCardById(projectId);
  }

  onProjectsListClick() {
    this.router.navigateByUrl('projects');
  }

  onHomepageClick() {
    this.router.navigateByUrl('home');
  }
}
