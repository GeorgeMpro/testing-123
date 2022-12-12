import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {HeaderComponent} from './header.component';
import {routes} from '../app-routing-module';
import {MainComponent} from '../main/main.component';
import {PortfolioComponent} from '../portfolio/portfolio.component';
import {ContactComponent} from '../contact/contact.component';
import {AboutComponent} from '../about/about.component';
import {ProjectsListComponent} from '../portfolio/project/projects-list.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SlideShowComponent} from '../portfolio/slide-show/slide-show.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent,
                MainComponent,
                PortfolioComponent,
                ContactComponent,
                AboutComponent,
                ProjectsListComponent,
                SlideShowComponent],
            imports: [
                FormsModule,
                FontAwesomeModule,
                RouterTestingModule.withRoutes(routes)
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
