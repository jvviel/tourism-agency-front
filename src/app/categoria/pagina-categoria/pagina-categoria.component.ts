import { Categoria } from '../shared/model/categoria.model';
import { CategoriaService } from './../shared/service/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-pagina-categoria',
  templateUrl: './pagina-categoria.component.html',
  styleUrls: ['./pagina-categoria.component.css']
})
export class PaginaCategoriaComponent implements OnInit {

public categorias: Categoria[];
public display: boolean = false;
public newCategoria = new Categoria();
  constructor(
    private categoriaService: CategoriaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService ) { }

  ngOnInit() {
    this.listarTodos();
  }

  public listarTodos(): void {
    this.categoriaService.listarTodos()
    .then(response => {
      this.categorias = response;
    })
    .catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Erro ao listar as categorias');
    });
  }

  showDialog() {
    this.display = true;
  }

  fecharDialog() {
    this.display = false;
    this.newCategoria = new Categoria();
  }

  public gravar(): void {
    this.categoriaService.gravarCategoria(this.newCategoria)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Categoria salva com sucesso!');
      this.listarTodos();
      this.fecharDialog();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao salvar a categoria!');
    });
  }

  public confirmarExclusao(categoria: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.remover(categoria);
      }
    });
  }

  public remover(categoria: any): void {
    this.categoriaService.removerCategoria(categoria.id)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Categoria removida com sucesso!');
      this.listarTodos();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao remover a categoria!');
    });
  }

  public alterar() {
    this.categoriaService.alterarCategoria(this.newCategoria)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Categoria alterada com sucesso!');
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao alterar a categoria!');
    });
  }

  public selecionar(categoria: any) {
    this.showDialog();
    this.newCategoria = categoria;
  }
}
