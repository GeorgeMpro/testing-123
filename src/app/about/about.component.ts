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
      name: 'Languages',
      skills: [
        'Python', 'Java', 'C', 'JavaScript'
      ]
    },
    {
      name: 'Frameworks and More',
      skills: [
        'Pytest', 'Angular 2+', 'Node.js', 'Jasmine', 'Jest',
        'Spring', 'JUnit 5', 'CSS3 Responsive', 'SCSS'
      ]
    },
    {
      name: 'Working Knowledge',
      skills: [
        'Vim', 'LaTex', ' Linux'
      ]
    },
    {
      name: 'Databases',
      skills: [
        'SQL', 'JDBC', 'MySQL']
    }
    // todo add when done some courses
    // {
    //   name: 'Data Analysis',
    //   skills: [
    //     'Matplotlib'
    //   ]
    // }
    // ,
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
