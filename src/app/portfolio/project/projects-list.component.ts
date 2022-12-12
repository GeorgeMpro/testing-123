import {Component, OnInit} from '@angular/core';
import {faEyeSlash, faLink} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {Project} from './project';
import {ProjectService} from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  // FontAwesome Icons
  github = faGithub;
  eyeClosed = faEyeSlash;
  link = faLink;

  projects: Project[];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
