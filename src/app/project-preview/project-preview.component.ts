import { ProjectCard } from '../models/project-card';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss'
})

export class ProjectPreviewComponent {
  
  @Input() projectPreview!: ProjectCard;

  constructor(private router: Router) {};

  onViewProject() {
    this.router.navigateByUrl(`projects/${this.projectPreview.id}`)
  }

}
