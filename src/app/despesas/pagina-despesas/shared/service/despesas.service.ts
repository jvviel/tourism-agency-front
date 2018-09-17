import { Despesa } from './../model/despesa.model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { ServidorService } from '../../../../shared/service/servidor.service';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  public urlDespesa = this.servidor.getServidor() + '/despesas';

  constructor(
    private http: Http,
    private servidor: ServidorService) { }

  public listarTodos(): Promise<Despesa[]> {
    return this.http.get(this.urlDespesa)
    .toPromise()
    .then(response => response.json());
  }

  public gravarDespesa(despesa: Despesa): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.urlDespesa, JSON.stringify(despesa), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public alterarDespesa(despesa: Despesa): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.urlDespesa + '/' + despesa.id, despesa, { headers })
    .toPromise()
    .then(response => response.json());
  }

  public removerDespesa(id: number): Promise<void> {
    return this.http.delete(this.urlDespesa + '/' + id)
    .toPromise()
    .then(response => response.json());
  }
}
