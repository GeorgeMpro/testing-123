import {Image} from '../slide-show/image';

export class Project {
    title: string;
    technologies: string[] = [];
    images: Image[] = [];
    description: string[] = [];
    links: {
        GitHub: string,
        liveLink: string
    };


    constructor() {
    }

    createProject(title: string) {
        this.title = title;
        return this;
    }

    setupTechnologies(...technologies) {
        for (let technology of technologies) {
            this.technologies.push(technology);
        }
        return this;
    }

    setupImages(...images) {
        for (let image of images) {
            this.images.push(image);
        }
        return this;
    }

    setupDescription(description: string[]) {
        for (let desc of description) {
            this.description.push(desc);
        }
        return this;
    }

    setupLinks(gitHub: string = '', liveLink: string = '') {
        this.links = {GitHub: gitHub, liveLink};
        return this;
    }

}
