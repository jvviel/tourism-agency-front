import { Cliente } from './shared/model/cliente.model';
import { ClienteService } from './shared/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-pagina-cliente',
  templateUrl: './pagina-cliente.component.html',
  styleUrls: ['./pagina-cliente.component.css']
})
export class PaginaClienteComponent implements OnInit {

  public newCliente = new Cliente();
  public senha: string;

  constructor(
    private clienteService: ClienteService,
    private toasty: ToastyService) { }

  ngOnInit() {
  }

  public gravar() {
    this.clienteService.gravarCliente(this.newCliente)
    .then(response => {
      this.toasty.clearAll();
      this.toasty.success('Seu cadastro foi efetuado com sucesso!');
      this.newCliente = new Cliente();
      this.senha = '';
    }).catch(error => {
      this.toasty.clearAll();
      this.toasty.error('Ocorreu um erro ao realizar seu cadastro!');
    });
  }

  public verificaSenha() {
    if (this.newCliente.senha === this.senha) {
      this.gravar();
    } else {
      this.toasty.clearAll();
      this.senha = '';
      this.toasty.warning('Senhas não conferem!');
    }
  }
}
