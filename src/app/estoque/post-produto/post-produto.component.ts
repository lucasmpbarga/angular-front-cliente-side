import { Component, OnInit, Input, Output } from '@angular/core';
import { Produto } from '../produto/produto.model';
import { EstoqueComponent } from '../estoque.component';
import { ProdutoService } from '../produto/produto.service';
import { templateSourceUrl } from '@angular/compiler';
import { Categoria } from '../categoria/categoria.model';
import { EstoqueService } from '../estoque.service';
import { PostProdutoService } from './postproduto.service';

@Component({
  selector: 'mt-post-produto',
  templateUrl: './post-produto.component.html'
})
export class PostProdutoComponent implements OnInit {

  produtoPost = new Produto();

  created: boolean = true;
  edited: boolean = false;

  categorias: Categoria[] = []

  constructor(
    private estoqueComponent: EstoqueComponent
    , private produtoService: ProdutoService
    , private estoqueService: EstoqueService
    , private postProdutoService: PostProdutoService
  ) { }

  ngOnInit() {
    this.produtoService.emitirProduto.subscribe(produto => this.carryProduto(produto));
    this.estoqueService.categorias().subscribe(categorias => this.categorias = categorias);
    this.postProdutoService.emitirProduto.subscribe( () => this.limpaCampos());
  }

  postProduto() {
    this.estoqueComponent.postProduto(this.produtoPost);
  }

  carryProduto(produto) {
    this.produtoPost.codigo_barra = produto.codigo_barra;
    this.produtoPost.nome = produto.nome;
    this.produtoPost.descricao = produto.descricao;
    this.produtoPost.quantidade = produto.quantidade;
    this.produtoPost.categoria_id = produto.categoria_id;
    this.produtoPost.categoria = produto.categoria;

    this.produtoPost.produto_id = produto.produto_id;
    
    this.edited = true;
    this.created = false;
  }

  limpaCampos() {
    this.edited = false;
    this.created = true;

    this.produtoPost = new Produto();
  }

  updateProduto() {
    this.produtoPost.categoria = this.categorias[this.produtoPost.categoria_id - 1].nome;
    this.estoqueService.updateProduto(this.produtoPost);
    this.estoqueComponent.updateProduto(this.produtoPost);
    this.postProdutoService.updateBtn();
  }



}
