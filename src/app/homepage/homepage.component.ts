import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContactComponent } from "../contact/contact.component";
import { FormComponent } from "../form/form.component";
import { Contact } from '../models/contact';
import { ProjectCard } from '../models/project-card';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectPreviewComponent } from "../project-preview/project-preview.component";
import { ContactService } from '../services/contact.service';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    ProjectCardComponent,
    ContactComponent,
    FormComponent,
    SlicePipe,
    RouterLink,
    ProjectPreviewComponent,
],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  projectCards!: ProjectCard[];
  contact!: Contact;

  constructor(
    private router: Router,
    private projectsService: ProjectsService,
    private contactService: ContactService,
  ) {}

  ngOnInit(): void {
    this.projectCards = this.projectsService.getProjectCards();
    this.contact = this.contactService.getContacts();
  }

  onContactClick() {
    this.router.navigateByUrl('contact');
  }
}
