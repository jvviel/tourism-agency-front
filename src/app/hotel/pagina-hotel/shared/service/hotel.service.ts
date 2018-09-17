import { Hotel } from './../model/hotel.model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ServidorService } from '../../../../shared/service/servidor.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  public urlHotel = this.servidorHotel.getServidor() + '/hoteis';

  constructor(
    private http: Http,
    private servidorHotel: ServidorService
  ) { }

  public listarTodos(): Promise<Hotel[]> {
    return this.http.get(this.urlHotel)
    .toPromise()
    .then(response => response.json());
  }

  public gravarHotel(hotel: Hotel): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.urlHotel, JSON.stringify(hotel), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public alterarHotel(hotel: Hotel): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.urlHotel + '/' + hotel.id, hotel, { headers } )
    .toPromise()
    .then(response => response.json());
  }

  public removerHotel(id: number): Promise<void> {
    return this.http.delete(this.urlHotel + '/' + id)
    .toPromise()
    .then(response => response.json());
  }
}
