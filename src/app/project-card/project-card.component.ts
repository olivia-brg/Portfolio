import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectCard } from '../models/project-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})

export class ProjectCardComponent {
  
  @Input() projectCard!: ProjectCard;

  constructor(private router: Router) {};

  onViewProject() {
    this.router.navigateByUrl(`projects/${this.projectCard.id}`)
  }

}
