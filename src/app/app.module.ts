import { Http, HttpModule } from '@angular/http';
import { PokemonHttpService } from './service/pokemon/pokemon-http-service';
import { MAIN_ROUTES as MAIN_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PokemonPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(MAIN_ROUTES)
  ],
  providers: [PokemonHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
