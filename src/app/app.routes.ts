import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';

export const MAIN_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'pokepage', component: PokemonPageComponent },
    { path: 'pokepage/:page', component: PokemonPageComponent }

//     { path: 'restaurants/:id', component: RestaurantDetailComponent, children: [
//         { path: '', redirectTo: 'menu', pathMatch: 'full' },
//         { path: 'menu', component: MenuComponent },
//         { path: 'reviews', component: ReviewsComponent }
//     ]
// },
];
