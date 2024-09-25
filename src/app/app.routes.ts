import { Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'projects', component: ProjectsListComponent },
];
