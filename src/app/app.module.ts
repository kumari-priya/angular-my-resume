import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExperienceComponent }  from './experience.component';
import { ProfileComponent } from './profile.component';
import { ProjectsComponent } from './projects.component';
import { SkillsComponent } from './skills.component';
import { RightBarComponent } from './right-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ProfileComponent,
    ProjectsComponent,
    SkillsComponent,
    RightBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ExperienceComponent,
    ProfileComponent,
    ProjectsComponent,
    SkillsComponent,
    RightBarComponent
  ]
})
export class AppModule { }
