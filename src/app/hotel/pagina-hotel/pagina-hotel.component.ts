import { Cidade } from './../../cidade/pagina-cidade/shared/model/cidade.model';
import { CidadeService } from './../../cidade/pagina-cidade/shared/service/cidade.service';
import { ToastyService } from 'ng2-toasty';
import { Hotel } from './shared/model/hotel.model';
import { HotelService } from './shared/service/hotel.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-pagina-hotel',
  templateUrl: './pagina-hotel.component.html',
  styleUrls: ['./pagina-hotel.component.css']
})
export class PaginaHotelComponent implements OnInit {

  public hoteis: Hotel[];
  public display: boolean;
  public newHotel = new Hotel();
  public cidades: Cidade[];

  constructor(
    private hotelService: HotelService,
    private toasty: ToastyService,
    private cidadeService: CidadeService,
    private confirmation: ConfirmationService) { }

  ngOnInit() {
    this.listarTodos();
    this.buscarCidades();
  }

  showDialog() {
    this.display = true;
  }

  fecharDialog() {
    this.display = false;
    this.newHotel = new Hotel();
  }

  public listarTodos() {
    this.hotelService.listarTodos()
    .then(response => {
      this.hoteis = response;
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao listar os hoteis');
    });
  }

  public gravar() {
    this.hotelService.gravarHotel(this.newHotel)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Hotel salvo com sucesso!');
      this.fecharDialog();
      this.listarTodos();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao salvar o hotel!');
    });
  }

  public alterar(hotel: Hotel) {
    this.hotelService.alterarHotel(hotel)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Hotel alterado com sucesso!');
      this.listarTodos();
      this.fecharDialog();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao alterar o hotel!');
    });
  }

  public selecionar(hotel: any) {
    this.showDialog();
    this.newHotel = hotel;
  }

  public remover(hotel: Hotel) {
    this.hotelService.removerHotel(hotel.id)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Hotel removido com sucesso!');
      this.listarTodos();
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao remover o hotel!');
    });
  }

  public confirmarExclusao(hotel: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.remover(hotel);
      }
    });
  }

  public buscarCidades() {
    this.cidadeService.listarTodos()
    .then(response => {
      this.cidades = response;
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao listar as cidades para seleção!');
    });
  }

}
