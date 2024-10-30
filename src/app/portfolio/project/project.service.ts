import {Project} from './project';
import {Injectable} from '@angular/core';
import {Image} from '../slide-show/image';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
// todo add image creating method
  private projects: Project[] = [
    new Project().createProject('Checkers CLI with AI (Work In Progress)')
      .setupTechnologies('Python', 'Pytest')
      .setupImages(
        new Image('assets/images/checkers-cli-ai/1.png', ''),
        new Image('assets/images/checkers-cli-ai/2.png', ''),
        new Image('assets/images/checkers-cli-ai/3.png', ''),
        new Image('assets/images/checkers-cli-ai/4.png', ''),
        new Image('assets/images/checkers-cli-ai/5.png', ''),
      )
      .setupDescription([
        'A command-line Checkers game with an AI opponent.',
        'Designed for both player vs. player and player vs. AI gameplay modes.',
        'Current state: Command Line Interface (CLI) with player vs player gameplay.',
        'Upcoming features: Integration of an AI opponent using the Minimax algorithm with Alpha-Beta Pruning.',
        'Built using the TDD paradigm, extensible, and adaptable.  ',
      ])
      .setupLinks('https://github.com/GeorgeMpro/checkersCLIWithAI', ''),


    new Project().createProject('Bloom Filter')
      .setupTechnologies('Java', 'JUnit 5', 'Google Guava', 'Maven')
      .setupImages(
        new Image('assets/images/bloom-filter/1.png', 'Output Example'),
        new Image('assets/images/bloom-filter/2.png', 'Output Example')
      )
      .setupDescription([
        'The Open University 20407 - Data Structures and Introduction to Algorithms assignment (grade 99).',
        'Implemented a Bloom Filter in Java to test false positive rates, using configurable parameters (m and k). Designed for fast membership checking with a bit array and multiple hash functions.',
        'Developed with modular code for hash calculation, set management, and statistical reporting. Included JUnit tests for functionality verification, such as hash calculations, false positives, and file operations.',
        'Emphasized efficiency and accuracy in probabilistic data structure behavior.'
      ])
      .setupLinks('https://github.com/GeorgeMpro/manma-maman-14.git', ''),


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
        'The Open University 20465 - Systems Programming Laboratory final project (grade 96)',
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
