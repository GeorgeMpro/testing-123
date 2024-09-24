import {Project} from './project';
import {Injectable} from '@angular/core';
import {Image} from '../slide-show/image';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
// todo add image creating method
  private projects: Project[] = [
    new Project().createProject('C Preprocessor')
      .setupTechnologies('C')
      .setupImages(
        new Image('assets/images/lab-c/err3.png', 'Input Example'),
        new Image('assets/images/lab-c/err3-1.png', 'Output Example'),
        new Image('assets/images/lab-c/err3-2.png', 'Output Example'),
        new Image('assets/images/lab-c/err3-3.png', 'Output Example'),
        new Image('assets/images/lab-c/err3-4.png', 'Output Example'),
        new Image('assets/images/lab-c/err3-5.png', 'Output Example')
      )
      .setupDescription([
        'Final project (grade 96) in The Open University 20465 - Systems Programming Laboratory',
        'Developed a two-pass assembler in C that converts assembly code into machine language, handling symbol resolution, directives, and forward references.',
        'Designed with modular components for lexical analysis, symbol management, and binary output.',
        ' Prioritized efficient memory management and thorough error handling.',
      ])
      .setupLinks('https://github.com/GeorgeMpro/lab-c-preprocessor', ''),

    new Project().createProject('XML to Wiki Converter Service')
      .setupTechnologies('Java', 'JUnit 5', 'Gradle')
      .setupImages(
        new Image('assets/images/wiki-converter/wiki-1-input.png', 'Input Example'),
        new Image('assets/images/wiki-converter/wiki-1-output.png', 'Output Example'))
      .setupDescription([
        'The service parses .xml reports and writes .wiki files.',
        'Converts XML Sections, Bold, Italic and line breaks to WikiText format.',
        'Examples for the .xml report and desired output can be seen in src/main/java/resources/expected/'])
      .setupLinks('https://github.com/GeorgeMpro/wiki-converter-service', ''),
  ];
  // todo basic
//     new Project().createProject()
// .setupTechnologies()
// .setupDescription()
// .setupImages()
// .setupLinks(),

  getProjects() {
    return [...this.projects];
  }
}
