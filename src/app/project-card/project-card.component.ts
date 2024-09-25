import { Component, Input } from '@angular/core';
import { ProjectCard } from '../models/project-card';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})

export class ProjectCardComponent {

  @Input() projectCard!: ProjectCard;
  
}
