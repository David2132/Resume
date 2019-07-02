import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatInputModule, MatCheckboxModule, MatExpansionModule, MatDialogModule, MatFormFieldModule, MatSnackBarModule,} from '@angular/material';
import { AwardsComponent } from './awards/awards.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './main/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';




@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    AwardsComponent,
    MainComponent,
    ContactComponent,
    
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
      AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    DeviceDetectorModule
  ],
  providers: [ContactComponent],
  entryComponents:[ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule{
  
   }

