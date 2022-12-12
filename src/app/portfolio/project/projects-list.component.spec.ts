import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectsListComponent} from './projects-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SlideShowComponent} from '../slide-show/slide-show.component';

describe('ProjectComponent', () => {
    let component: ProjectsListComponent;
    let fixture: ComponentFixture<ProjectsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProjectsListComponent,
                SlideShowComponent
            ],
            imports: [
                FontAwesomeModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
