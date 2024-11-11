import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectPageComponent } from './project-page/project-page.component';

export const routes: Routes = [
    { path: 'projects/:id', component: ProjectPageComponent },
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'projects', component: ProjectsListComponent },
    { path: 'contact', component: ContactComponent}
];
