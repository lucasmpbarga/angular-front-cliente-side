import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantService } from './restaurants/restaurants.service';
import { EstoqueComponent } from './estoque/estoque.component';
import { ProdutoComponent } from './estoque/produto/produto.component';
import { EstoqueService } from './estoque/estoque.service';
import { PostProdutoComponent } from './estoque/post-produto/post-produto.component';
import { ProdutoService } from './estoque/produto/produto.service';
import { CategoriaComponent } from './estoque/categoria/categoria.component';
import { PostProdutoService } from './estoque/post-produto/postproduto.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    EstoqueComponent,
    ProdutoComponent,
    PostProdutoComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [RestaurantService, EstoqueService, PostProdutoComponent, EstoqueComponent, ProdutoService, PostProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
