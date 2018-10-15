import { Component, OnInit, Input } from '@angular/core';

import {Produto} from './produto.model';
import { EstoqueComponent } from '../estoque.component';
import { PostProdutoComponent } from '../post-produto/post-produto.component';
import { ProdutoService } from './produto.service';
import { EstoqueService } from '../estoque.service';
import { Categoria } from '../categoria/categoria.model';

@Component({
  selector: 'mt-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Produto

  constructor(
    private estoqueComponent: EstoqueComponent
    , private produtoService: ProdutoService
  ) { }

  ngOnInit() {

  }

  onClickMe() {
    this.estoqueComponent.deleteProduto(this.produto.produto_id);
  }

  editClickMe(){
    this.produtoService.updateProduto(this.produto);
  }
}
