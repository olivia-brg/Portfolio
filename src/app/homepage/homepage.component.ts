import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { FormComponent } from "../form/form.component";
import { Contact } from '../models/contact';
import { ProjectCard } from '../models/project-card';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectPreviewComponent } from "../project-preview/project-preview.component";
import { ContactService } from '../services/contact.service';
import { ProjectsService } from '../services/projects.service';
gsap.registerPlugin(ScrollTrigger);

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
  

  // ngAfterViewInit() {
  //   // Animation pour la section .section à chaque trigger
  //   this.createScrollTrigger(".about");
  //   this.createScrollTrigger(".projects");
  //   this.createScrollTrigger(".contact");
  // }

  // private createScrollTrigger(triggerSelector: string) {
  //   gsap.to('.section', 
  //     {
  //     scrollTrigger: {
  //       trigger: triggerSelector, // L'élément qui déclenche l'animation
  //       start: "top bottom",      // Démarre quand le haut de l'élément atteint le bas de la fenêtre
  //       end: "top top",           // Se termine quand le haut de l'élément atteint le haut de la fenêtre
  //       scrub: 1,                 // Suivi de l'animation avec le défilement
  //       snap: {
  //         snapTo: 1,              // Snap à 1
  //         duration: 1.5           // Durée du snap
  //       }
  //     },
  //   });
  // }
}
