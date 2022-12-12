import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isMobileDisplay: boolean;
    isMobileNavMenuOpen = false;
    maxClientWidthForMobileDisplay = 414;

    links: Array<{ name: string, address: string }> = [
        // todo replace Home  with logo
        {name: 'Home', address: '/'},
        {name: 'Portfolio', address: '/portfolio'},
        {name: 'Contact', address: '/contact'},
        {name: 'About', address: '/about'}
    ];

    // todo close mobile nav one screen size change

    constructor() {
    }

    ngOnInit() {
        this.checkScreenDisplayWidth();
    }

    onClickMobileMenuDisplay($event: MouseEvent) {
        this.isMobileNavMenuOpen = !this.isMobileNavMenuOpen;
    }

    /**
     * Check if the client is on mobile or desktop display. Listen to changes in screen size.
     */
    checkScreenDisplayWidth() {
        this.isMobileDisplay = (this.checkDisplay(this.maxClientWidthForMobileDisplay));
        this.listenToWindowResizeChanges(this.maxClientWidthForMobileDisplay);
    }

    private checkDisplay(maxWidth: number) {
        return document.documentElement.clientWidth <= maxWidth;
    }

    private listenToWindowResizeChanges(maxWidth) {
        window.onresize = () => {
            this.isMobileDisplay = this.checkDisplay(maxWidth);
        };
    }
}



