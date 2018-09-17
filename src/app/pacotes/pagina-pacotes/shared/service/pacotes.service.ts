import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { ServidorService } from '../../../../shared/service/servidor.service';
import { Pacote } from '../model/pacote.model';

@Injectable({
  providedIn: 'root'
})
export class PacotesService {

  urlPacotes = this.servidorService.getServidor() + '/pacotes';

  constructor(
    private http: Http,
    private servidorService: ServidorService
  ) { }

  public buscarTodos(): Promise<Pacote[]> {
    return this.http.get(this.urlPacotes)
    .toPromise()
    .then(response => response.json());
  }

  public gravarPacote(pacote: Pacote): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.urlPacotes, JSON.stringify(pacote), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public alterarPacote(pacote: Pacote): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.urlPacotes + '/' + pacote.id, pacote, {headers} )
    .toPromise()
    .then(response => response.json());
  }

  public removerPacote(id: number): Promise<void> {
    return this.http.delete(this.urlPacotes + '/' + id)
    .toPromise()
    .then(response => response.json());
  }
}
