import { Component, OnInit } from '@angular/core';
import { Projects } from './projects';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'my-projects',
  templateUrl: './projects.component.html',
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
  title = 'Projects';
  projects: Projects[];

  constructor(private projectsService: ProjectsService) { }
  getProjects(): void {
    this.projects = this.projectsService.getProjects();
  }
  ngOnInit(): void {
    this.getProjects();
  }

}
