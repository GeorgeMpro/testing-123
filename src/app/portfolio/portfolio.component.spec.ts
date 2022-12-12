import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PortfolioComponent} from './portfolio.component';
import {ProjectsListComponent} from './project/projects-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SlideShowComponent} from './slide-show/slide-show.component';

describe('PortfolioComponent', () => {
    let component: PortfolioComponent;
    let fixture: ComponentFixture<PortfolioComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PortfolioComponent,
                ProjectsListComponent,
                SlideShowComponent
            ],
            imports: [FontAwesomeModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PortfolioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
