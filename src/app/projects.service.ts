import { Injectable } from '@angular/core';
import { Projects } from './projects';
import { PROJECTS } from './data-projects';


@Injectable()
export class ProjectsService {
  getProjects(): Projects[] {
    return PROJECTS;
  }
}
