import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { ESTOQUE_API } from '../app.api';
import { Produto } from './produto/produto.model';
import { Categoria } from './categoria/categoria.model';

@Injectable()
export class EstoqueService {

  constructor(private http: Http) { }

  produtos(): Observable<Produto[]> {
    return this.http.get(`${ESTOQUE_API}/produtos`)
      .map(response => response.json());
  }

  categorias(): Observable<Categoria[]> {
    return this.http.get(`${ESTOQUE_API}/categorias`)
      .map(response => response.json());
  }

  categoria(id): Observable<Categoria> {
    return this.http.get(`${ESTOQUE_API}/categorias/` + id)
      .map(response => response.json());
  }

  deleteProduto(id) {
    this.http.delete(`${ESTOQUE_API}/produtos/` + id)
      .subscribe(result => {
        console.log(result.json())
      });
  }

  postProduto(produto) {
    return this.http.post(`${ESTOQUE_API}/produtos/`, produto)
      .subscribe(result => {
        console.log(result.json())
      });
  }

  updateProduto(produto): Observable<Produto> {
    return this.http.put(`${ESTOQUE_API}/produtos/` + produto.produto_id, produto)
      .map(response => response.json());
  }
}