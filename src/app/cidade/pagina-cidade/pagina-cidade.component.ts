import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Cidade } from './shared/model/cidade.model';
import { ToastyService } from 'ng2-toasty';
import { CidadeService } from './shared/service/cidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-cidade',
  templateUrl: './pagina-cidade.component.html',
  styleUrls: ['./pagina-cidade.component.css']
})
export class PaginaCidadeComponent implements OnInit {

  public cidades: Cidade[];
  public display: boolean;
  public newCidade = new Cidade();

  constructor(
    private cidadeService: CidadeService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService) { }

  ngOnInit() {
    this.listarTodos();
  }

  public showDialog() {
    this.display = true;
  }

  public fecharDialog() {
    this.display = false;
    this.newCidade = new Cidade();
  }

  public listarTodos() {
    this.cidadeService.listarTodos()
    .then(response => {
      this.cidades = response;
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao listar as cidades!');
    });
  }

  public gravar(): void {
    this.cidadeService.gravarCidade(this.newCidade)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Cidade salva com sucesso!');
      this.listarTodos();
      this.fecharDialog();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao salvar a cidade!');
    });
  }

  public confirmarExclusao(cidade: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.remover(cidade);
      }
    });
  }

  public remover(cidade: any): void {
    this.cidadeService.removerCidade(cidade.id)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Cidade removida com sucesso!');
      this.listarTodos();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao remover a cidade!');
    });
  }

  public alterar() {
    this.cidadeService.alterarCidade(this.newCidade)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Cidade alterada com sucesso!');
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao alterar a cidade!');
    });
  }

  public selecionar(cidade: any) {
    this.showDialog();
    this.newCidade = cidade;
  }

}
