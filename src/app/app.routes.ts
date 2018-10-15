import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EstoqueComponent } from './estoque/estoque.component';

export const ROUTES: Routes = [
    {path: '', component: EstoqueComponent}
    // ,
    // {path: 'restaurants', component: RestaurantsComponent},
    // {path: 'estoque', component: EstoqueComponent},
    
    // {path: 'about', component: AboutComponent}
]