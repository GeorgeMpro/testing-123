import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from './app-routing-module';
import {MainComponent} from './main/main.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {ProjectsListComponent} from './portfolio/project/projects-list.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SlideShowComponent} from './portfolio/slide-show/slide-show.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        PortfolioComponent,
        ContactComponent,
        AboutComponent,
        ProjectsListComponent,
        SlideShowComponent
      ],
      imports: [
        FormsModule,
        FontAwesomeModule,
        RouterTestingModule.withRoutes(routes)
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'george-merenzon-portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('george-merenzon-portfolio');
  });
});
