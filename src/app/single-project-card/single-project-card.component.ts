import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectCard } from '../models/project-card';
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

  @Input() projectPreview!: ProjectCard;

  projectCard!: ProjectCard;
  projectCards!: ProjectCard[];

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
