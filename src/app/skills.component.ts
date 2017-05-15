import { Component, OnInit } from '@angular/core';

import { Skills } from './skills';
import { SkillsService } from './skills.service';


@Component({
  selector: 'my-skills',
  templateUrl: './skills.component.html',
  providers: [SkillsService]
})
export class SkillsComponent implements OnInit {
  title = 'SKILLS & PROFICIENCY';
  skills : Skills[];

  constructor( private skillsService: SkillsService) { }

    getSkills(): void {
      this.skillsService.getSkills().then((skills : Array<any>) => this.skills = skills);
}

ngOnInit(): void {
  this.getSkills();
}

}
