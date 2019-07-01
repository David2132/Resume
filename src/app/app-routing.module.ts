import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EducationComponent} from './education/education.component'
import {SkillsComponent} from './skills/skills.component'
import {ProjectsComponent} from './projects/projects.component'
import {MainComponent} from "./main/main.component"

const routes: Routes = [
{path:'', component:MainComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }