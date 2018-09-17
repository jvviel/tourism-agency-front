import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { ServidorService } from '../../../../shared/service/servidor.service';
import { Cidade } from '../model/cidade.model';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  public urlCidade = this.servidor.getServidor() + '/cidades';

  constructor(
    private servidor: ServidorService,
    private http: Http) { }

    public listarTodos(): Promise<Cidade[]> {
      return this.http.get(this.urlCidade)
      .toPromise()
      .then(response => response.json());
    }

    public gravarCidade(cidade: Cidade): Promise<any> {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.urlCidade, JSON.stringify(cidade), { headers })
      .toPromise()
      .then(response => response.json());
    }

    public removerCidade(id: number): Promise<any> {
      return this.http.delete(this.urlCidade + '/' + id)
      .toPromise()
      .then(response => response.json());
    }

    public alterarCidade(cidade: Cidade): Promise<any> {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.put(this.urlCidade + '/' + cidade.id, cidade, {headers})
      .toPromise()
      .then(response => response.json());
    }
}
