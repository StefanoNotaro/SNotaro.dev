import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutMeComponent } from './about-me/about-me.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FooterComponent } from './share/components/footer/footer.component';
import { HeaderComponent } from './share/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    PersonalInfoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
