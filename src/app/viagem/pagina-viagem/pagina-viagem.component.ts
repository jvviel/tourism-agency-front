import { DespesasService } from './../../despesas/pagina-despesas/shared/service/despesas.service';
import { Despesa } from './../../despesas/pagina-despesas/shared/model/despesa.model';
import { Categoria } from './../../categoria/shared/model/categoria.model';
import { Hotel } from './../../hotel/pagina-hotel/shared/model/hotel.model';
import { HotelService } from './../../hotel/pagina-hotel/shared/service/hotel.service';
import { CategoriaService } from './../../categoria/shared/service/categoria.service';
import { Viagem } from './shared/model/viagem.model';
import { ToastyService } from 'ng2-toasty';
import { ViagemService } from './shared/service/viagem.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-pagina-viagem',
  templateUrl: './pagina-viagem.component.html',
  styleUrls: ['./pagina-viagem.component.css']
})
export class PaginaViagemComponent implements OnInit {

  public viagens: Viagem[];
  public display: boolean;
  public newViagem = new Viagem();
  public hoteis: Hotel[];
  public categorias: Categoria[];
  public data = new Date();
  public despesas: Despesa[];

  constructor(
    private viagemService: ViagemService,
    private toasty: ToastyService,
    private categoriaService: CategoriaService,
    private hotelService: HotelService,
    private despesaService: DespesasService,
    private confirmation: ConfirmationService) { }

  ngOnInit() {
    this.listarTodos();
    this.buscarCategorias();
    this.buscarHoteis();
    this.buscarDespesas();
  }

  public showDialog() {
    this.display = true;
  }

  public fecharDialog() {
    this.display = false;
    this.newViagem = new Viagem();
  }

  public listarTodos() {
    this.viagemService.listarTodos()
    .then(response => {
      this.viagens = response;
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao listar as viagens!');
    });
  }

  public buscarHoteis() {
    this.hotelService.listarTodos()
    .then(response => {
      this.hoteis = response;
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao listar os hoteis!');
    });
  }

  public buscarCategorias() {
    this.categoriaService.listarTodos()
    .then(response => {
      this.categorias = response;
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao listar as categorias!');
    });
  }

  public buscarDespesas() {
    this.despesaService.listarTodos()
    .then(response => {
      this.despesas = response;
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao listar as despesas!');
    });
  }

  public gravar() {
    if (this.newViagem.id == null) {
    this.viagemService.gravarViagem(this.newViagem)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Viagem salva com sucesso!');
      this.fecharDialog();
      this.listarTodos();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao salvar a viagem!');
    });
  } else {
    this.alterar();
  }
  }

  public alterar() {
    this.viagemService.alterarViagem(this.newViagem)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Viagem alterada com sucesso!');
      this.fecharDialog();
      this.listarTodos();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao alterar a viagem!');
    });
  }

  public selecionar(viagem: any) {
    this.showDialog();
    this.newViagem = viagem;
  }

  public confirmarExclusao(viagem: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.remover(viagem);
      }
    });
  }

  public remover(viagem: any) {
    this.viagemService.removerViagem(viagem.id)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Viagem removida com sucesso!');
      this.listarTodos();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.warning('Essa viagem não pode ser removida!');
    });
  }

  public calcularValorPorPessoa() {
    this.viagemService.calcularValorPessoa(this.newViagem)
    .then(response => {
      this.newViagem = response;
      console.log('Deu certo!');
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.warning('Informe um percentual, quantidade de vagas e selecione as despesas para um calculo bem sucedido!');
    });
  }
}
