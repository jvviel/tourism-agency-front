import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * @author Luis Franco
 * @description
 * Classe de serviço injetável para recuperar a URL do servidor atual.
 * Esse serviço foi criado para facilitar futuras migrações de servidor
 * backend, todas os outros serviços devem utiliza-la para fazer requisições
 * ao servidor.
 */
export class ServidorService {

  private servidor: string = 'http://localhost:8080';
  private servidorContrato: string = 'https://cepein.femanet.com.br/ArqMatric/';
  constructor() { }

  /**
   * @description
   * Retorna a url do servidor backend atual. É importante concatenar a
   * resposta deste método com o path do serviço que deseja consumir, exemplo:
   * private servidor = this.servidorService.getServidor() + '/servico-a-ser-consumido';
   */
  public getServidor(): string {
    return this.servidor;
  }

  public getServidorContrato(): string {
    return this.servidorContrato;
  }
}
