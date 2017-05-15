import { Component, OnInit } from '@angular/core';
import { Experience } from './experience';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'my-experience',
  templateUrl: './experience.component.html',
  providers: [ExperienceService]
})
export class ExperienceComponent implements OnInit {
  title = 'Experiences';
  experiences: Experience[];
  constructor(private experienceService: ExperienceService) { }
  getExperience(): void {
    this.experiences= this.experienceService.getExperience();
  }
  ngOnInit(): void {
    this.getExperience();
  }
}
