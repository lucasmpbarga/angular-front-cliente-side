import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Produto } from '../produto/produto.model';

@Injectable()
export class PostProdutoService {

  constructor() { }

  emitirProduto = new EventEmitter<boolean>();

  updateBtn(){
    this.emitirProduto.emit(false);
  }
}