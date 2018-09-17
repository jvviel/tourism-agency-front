import { ServidorService } from './../../../shared/service/servidor.service';
import { Categoria } from '../model/categoria.model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlCategoria = this.servidor.getServidor() + '/categorias';

  constructor(
    private http: Http,
    private servidor: ServidorService) { }

  public listarTodos(): Promise<Categoria[]> {
      return this.http.get(this.urlCategoria)
      .toPromise()
      .then(response => response.json());
  }

  public gravarCategoria(categoria: Categoria): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.urlCategoria, JSON.stringify(categoria), { headers })
    .toPromise()
    .then(response => response.json);
  }

  public removerCategoria(id: number): Promise<any> {
    return this.http.delete(this.urlCategoria + '/' + id)
    .toPromise()
    .then(response => response.json);
  }

  public alterarCategoria(categoria: Categoria): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.urlCategoria + '/' + categoria.id, categoria, {headers})
    .toPromise()
    .then(response => response.json);
  }
}
