export class Image {
    src: string;
    alt: string;
    isActive: boolean;


    constructor(src: string, alt: string, isActive: boolean = false) {
        this.src = src;
        this.alt = alt;
        this.isActive = isActive;
    }
}
