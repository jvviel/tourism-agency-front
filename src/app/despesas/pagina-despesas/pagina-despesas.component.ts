import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Despesa } from './shared/model/despesa.model';
import { DespesasService } from './shared/service/despesas.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-pagina-despesas',
  templateUrl: './pagina-despesas.component.html',
  styleUrls: ['./pagina-despesas.component.css']
})
export class PaginaDespesasComponent implements OnInit {

  public despesas: Despesa[];
  public newDespesa = new Despesa();
  public display: boolean;

  constructor(
    private despesaService: DespesasService,
    private confirmation: ConfirmationService,
    private toasty: ToastyService) { }

  ngOnInit() {
    this.listarTodos();
  }

  public showDialog() {
    this.display = true;
  }

  public fecharDialog() {
    this.display = false;
    this.newDespesa = new Despesa();
  }

  public listarTodos() {
    this.despesaService.listarTodos()
    .then(response => {
      this.despesas = response;
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao listar as despesas1');
    });
  }

  public gravar() {
    if (this.newDespesa.id == null) {
    this.despesaService.gravarDespesa(this.newDespesa)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Despesa salva com sucesso!');
      this.fecharDialog();
      this.listarTodos();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao salvar a despesa!');
    }); } else {
      this.alterar();
    }
  }

  public alterar() {
    this.despesaService.alterarDespesa(this.newDespesa)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Despesa alterada com sucesso!');
      this.fecharDialog();
      this.listarTodos();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao alterar a despesa!');
    });
  }

  public selecionar(despesa: any) {
    this.showDialog();
    this.newDespesa = despesa;
  }

  public confirmarExclusao(hotel: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.remover(hotel);
      }
    });
  }

  public remover(despesa: any) {
    this.despesaService.removerDespesa(despesa.id)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Despesa removida com sucesso!');
      this.listarTodos();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao remover a despesa!');
    });
  }

}
