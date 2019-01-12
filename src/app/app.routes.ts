import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';

export const MAIN_ROUTES: Routes = [
    { path: '', component: PokemonPageComponent },
    { path: 'about', component: AboutComponent },
]