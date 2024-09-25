import { Component, Input } from '@angular/core';
import { ProjectCard } from '../models/project-card';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-single-project-card',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe
  ],
  templateUrl: './single-project-card.component.html',
  styleUrl: './single-project-card.component.scss'
})

export class SingleProjectCardComponent {

  @Input() projectCard!: ProjectCard;
  
}
