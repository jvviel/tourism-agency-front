import { Cliente } from './../model/cliente.model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { ServidorService } from '../../../../shared/service/servidor.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlCliente = this.servidorCliente.getServidor() + '/cliente';

  constructor(
    private http: Http,
    private servidorCliente: ServidorService) { }

  public gravarCliente(cliente: Cliente): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.urlCliente, JSON.stringify(cliente), { headers })
    .toPromise()
    .then(response => response.json());
  }
}
