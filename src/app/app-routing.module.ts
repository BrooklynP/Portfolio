import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { SingleProjectPageComponent } from './pages/single-project-page/single-project-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CvPageComponent } from './pages/cv-page/cv-page.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'project/:uid',
    component: SingleProjectPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsPageComponent
  },
  {
    path: 'projects/:uid',
    component: ProjectsPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'about/cv',
    component: CvPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
