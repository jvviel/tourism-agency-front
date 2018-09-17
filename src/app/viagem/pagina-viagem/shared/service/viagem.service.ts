import { Viagem } from './../model/viagem.model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ServidorService } from '../../../../shared/service/servidor.service';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  public urlViagem = this.servidor.getServidor() + '/viagem';

  constructor(
    private http: Http,
    private servidor: ServidorService) { }

    public listarTodos(): Promise<Viagem[]> {
      return this.http.get(this.urlViagem)
      .toPromise()
      .then(response => response.json());
    }

    public gravarViagem(viagem: Viagem): Promise<void> {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.urlViagem, JSON.stringify(viagem), { headers })
      .toPromise()
      .then(response => response.json());
    }

    public alterarViagem(viagem: Viagem): Promise<void> {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.put(this.urlViagem + '/' + viagem.id, viagem, {headers})
      .toPromise()
      .then(response => response.json());
    }

    public removerViagem(id: number): Promise<void> {
      return this.http.delete(this.urlViagem + '/' + id)
      .toPromise()
      .then(response => response.json());
    }

    public calcularValorPessoa(viagem: Viagem): Promise<Viagem> {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.put(this.urlViagem + '/valorTotal', viagem, { headers })
      .toPromise()
      .then(response => response.json());
    }
}
