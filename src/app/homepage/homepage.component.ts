import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from "../about/about.component";
import { FormComponent } from "../form/form.component";
import { Contact } from '../models/contact';
import { ProjectCard } from '../models/project-card';
import { ProjectPreviewComponent } from "../project-preview/project-preview.component";
import { ContactService } from '../services/contact.service';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    FormComponent,
    SlicePipe,
    ProjectPreviewComponent,
    AboutComponent,
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
  ) { }

  ngOnInit(): void {
    this.projectCards = this.projectsService.getProjectCards();
    this.contact = this.contactService.getContacts();
  }

  onContactClick() {
    this.router.navigateByUrl('contact');
  }

}
