import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {CloudinaryModule} from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {AppRoutingModule} from './app-routing-module';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ProjectsListComponent} from './portfolio/project/projects-list.component';
// todo
// import {ContactComponent} from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AboutComponent} from './about/about.component';
import {SlideShowComponent} from './portfolio/slide-show/slide-show.component';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    PortfolioComponent,
    ProjectsListComponent,
    //todo
    // ContactComponent,
    AboutComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: environment.cloud_name
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
