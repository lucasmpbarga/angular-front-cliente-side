import { Component, OnInit } from '@angular/core';
import { Produto } from './produto/produto.model';
import { EstoqueService } from './estoque.service';
import { Categoria } from './categoria/categoria.model';

@Component({
  selector: 'mt-estoque',
  templateUrl: './estoque.component.html'
})
export class EstoqueComponent implements OnInit {

  produtos: Produto[] = [];
  categoria: Categoria;

  constructor(private estoqueService: EstoqueService) {

  }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.estoqueService.produtos().subscribe(produtos => this.produtos = produtos);
    this.estoqueService.produtos().subscribe(() => this.buscaCatedoria());
    this.estoqueService.produtos().subscribe(() => this.sortArray());
  }

  buscaCatedoria() {
    this.produtos.forEach(p => {
      this.estoqueService.categoria(p.categoria_id).subscribe(categoria => p.categoria = categoria.nome);
    })
  }

  sortArray() {
    this.produtos.sort((a, b) => {
      if (a.nome < b.nome) return -1;
      else if (a.nome > b.nome) return 1;
      else return 0;
    });
  }

  deleteProduto(id) {
    this.estoqueService.deleteProduto(id);
    this.produtos = this.produtos.filter(produtos => produtos.produto_id != id);
    this.sortArray();
  }

  postProduto(produto) {
    this.estoqueService.postProduto(produto);
    this.estoqueService.categoria(produto.categoria_id).subscribe(categoria => produto.categoria = categoria.nome);
    this.produtos.push(produto);
    this.sortArray();
  }

  updateProduto(produto){
    this.produtos = this.produtos.filter(produtos => produtos.produto_id != produto.produto_id);
    this.produtos.push(produto);
    this.sortArray();
  }
}
