import { ToastyService } from 'ng2-toasty';
import { PacotesService } from './shared/service/pacotes.service';
import { Component, OnInit } from '@angular/core';
import { Pacote } from './shared/model/pacote.model';

@Component({
  selector: 'app-pagina-pacotes',
  templateUrl: './pagina-pacotes.component.html',
  styleUrls: ['./pagina-pacotes.component.css']
})
export class PaginaPacotesComponent implements OnInit {

  public pacotes: Pacote[];

  constructor(
    private pacoteService: PacotesService,
    private toasty: ToastyService) { }

  ngOnInit() {
    this.listarTodos();
  }

  public listarTodos() {
    this.pacoteService.buscarTodos()
    .then(response => {
      this.pacotes = response;
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao listar os pacotes');
    });
  }

}
