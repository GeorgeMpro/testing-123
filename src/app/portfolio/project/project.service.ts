import {Project} from './project';
import {Injectable} from '@angular/core';
import {Image} from '../slide-show/image';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
// todo add image creating method
    private projects: Project[] = [
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

        new Project().createProject('M.M.Kon-Tiki Website')
            .setupTechnologies('Angular 8', 'NodeJS', 'Send Grid')
            .setupImages(new Image('assets/images/mockup-kontiki.png', 'Supports Laptop and Mobile display'))
            .setupDescription([
                'Demo Website for M.M.Kon-Tiki Investments Ltd.',
                'Has an active Contact form, uses form verification, displays Success and Error messages to the user.',
                'Sends email using Send Grid.', 'Responsive to small, medium, and large screens.'])
            .setupLinks('', 'https://kontiki-investments.herokuapp.com/'),

        new Project().createProject('Movies Application')
            .setupTechnologies('Angular 8', 'NodeJS', 'Angular Material', 'YTS API')
            .setupDescription(['Web Application for viewing movies information.',
                'Uses a 3rd party API for retrieving the movies information.',
                'Allows expanding and showing additional information of selected film Title, or films of the same genre.',
                'Allows the user to filter, use pagination, and basic error displaying and handling.'])
            .setupImages(new Image('assets/images/mockup-movies-app.png', 'Supports Laptop display'))
            .setupLinks('https://github.com/GeorgeMpro/movie-list-app', 'https://movie-app-gmpro.herokuapp.com/'),

        new Project().createProject('CryptoWorld - Demo Website Styling')
            .setupTechnologies('Angular 8', 'NodeJS', 'SCSS')
            .setupDescription([
                'Demo Website.',
                'A responsive website built upon a given Mobile and Desktop product design.'])
            .setupImages(new Image('assets/images/mockup-inbound-demo.png', 'Supports Laptop and Mobile display'))
            .setupLinks('https://github.com/GeorgeMpro/inbound-junction-test', 'https://inbound-junction-test.herokuapp.com/'),

        // todo add "Work In Progress" badge
        new Project().createProject('Coupon System - Server Side')
            .setupTechnologies('Java', 'Spring Boot', 'Spring Data JPA', 'Spring MVC', 'JUnit 5', 'Mockito', 'Hamcrest', 'MySQL')
            .setupDescription([
                'Work in Progress.',
                'The application will be an interactive Coupon System.',
                'The purpose of this demo is to practice the Test Driven Development methodology.',
                'In addition to practicing the applied technologies.'])
            .setupImages(new Image('', ''))
            .setupLinks('https://github.com/GeorgeMpro/Spring-and-Angular-demo-Server-Side', ''),

        // todo add "Work In Progress" badge
        new Project().createProject('Coupon System - Client Side')
            .setupTechnologies('Angular 2+', 'RxJS', 'NgRX', 'Jasmine')
            .setupDescription([
                'Work in progress.',
                'The Client side of the Coupon System Application',
                'The purpose of this demo is to practice Web Development and the applied technologies'])
            .setupImages(new Image('', ''))
            .setupLinks('https://github.com/GeorgeMpro/Spring-and-Angular-demo-Client-Side', ''),
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
