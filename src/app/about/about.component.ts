import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // todo extract to model
  // skillSet: {
  //   name,
  //   skills: []
  // };

  skillList = [
    {
      name: 'Front End',
      skills: [
        'Angular 2+', 'RxJS', 'NgRX', 'JavaScript', 'TypeScript', 'CSS3 Responsive', 'SCSS', 'Jasmine'
      ]
    },
    {
      name: 'Back End',
      skills: [
        'Java', 'C', 'Python', 'Node.js', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'JUnit 5', 'Jest'
      ]
    },
    {
      name: 'Data Analysis',
      skills: [
        'Matplotlib'
      ]
    },
    {
      name: 'Databases',
      skills: [
        'SQL', 'JDBC', 'MySQL']
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
