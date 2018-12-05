import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { RendersComponent } from './renders/renders.component';
import { CvComponent } from './cv/cv.component';
import { EducationComponent } from './education/education.component';
import { ReformasComponent } from './reformas/reformas.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AbotuComponent } from './abotu/abotu.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavbarrouterlinkComponent } from './navbarrouterlink/navbarrouterlink.component';
import { HomeComponent } from './home/home.component';
import { PopupComponent } from './popup/popup.component';
import {GalleryComponent} from './gallery/gallery.component';

const routes: Routes = [
 
  {path: 'Home', component:HomeComponent},
  {path:'', redirectTo:'/Home',pathMatch: 'full' },
  {path:'Portfolio', 
   component: PortfolioComponent,
   children:[
     {path:'Gallery',
     component:GalleryComponent,
     outlet:'liz'
   }
   ]
  
  },

  {
    path: 'Documentacion',
    component: DocumentacionComponent

  },
  {
    path: 'Reformas',
    component: ReformasComponent
  },
  {
    path: 'Renders',
    component: RendersComponent
  }, 
  {path:'NavBarRl', component: NavbarrouterlinkComponent},

  { path:'Cv', component:CvComponent },
  { path:'Welcome', component:WelcomeComponent },
  { path:'Education', component:EducationComponent },
  { path:'About', component:AboutmeComponent},
  { path:'Navbar', component:NavbarComponent},  
  { path:'AboutUs', component:AbotuComponent},  
  { path:'Contact', component:ContactComponent}, 
  { path:'Skills', component:SkillsComponent},   
  { path:'Profiles', component:ProfilesComponent},   
  { path:'Experience', component:ExperienceComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
