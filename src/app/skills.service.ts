import { Injectable } from '@angular/core';

import { Skills } from './skills';
import { SKILLS } from './data-skills'

@Injectable()
export class SkillsService {
              getSkills(): Promise<Skills[]> {
                  return Promise.resolve(SKILLS);
                }

}
