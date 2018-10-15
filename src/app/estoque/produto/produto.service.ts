import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Produto } from './produto.model';

@Injectable()
export class ProdutoService {

  constructor() { }

  emitirProduto = new EventEmitter<Produto>();

  updateProduto(produto){
    this.emitirProduto.emit(produto);
  }
}