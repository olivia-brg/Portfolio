import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { SingleProjectCardComponent } from './single-project-card/single-project-card.component';

export const routes: Routes = [
    { path: 'projects/:id', component: SingleProjectCardComponent },
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'projects', component: ProjectsListComponent },
    { path: 'contact', component: ContactComponent}
];
