import { ServidorService } from './servidor.service';
import { JwtHelper, AuthHttp } from 'angular2-jwt';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
/**
 * @author Luis Franco
 * 
 * @description
 * Classe de serviço injetável utilizada para gerenciamento de token.
 * Código baseado no sistema de Assistência Tecnica feito por Renato Virto.
 * 
 */

export class TokenService {

  private jwtPayload: any = '';
  private servidor: string;

  constructor(private http: AuthHttp, private JwtHelper: JwtHelper, private servidorService: ServidorService) { 
    this.servidor = this.servidorService.getServidor() + '/oauth/token';
    this.carregarToken();
  }

  /**
   * 
   * @param token 
   * 
   * @description
   * Armazena o token retornado do backend na memória do browser do usuário.
   * @returns void;
   */
  public armazenarToken(token: string): void{
    this.jwtPayload = this.JwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  /**
   * @description
   * Carrega o token na memoria do browser do usuario.
   * 
   * @see armazenarToken
   */
  public carregarToken(): void{
    const token = localStorage.getItem('token');

    if(token != null){
      if(token.length > 1){
        this.armazenarToken(token);
      }
    }

  }

  /**
   * @description Verifica se token é válido ou não
   */
  public isAccessTokenInvalido(): boolean {
    const token = localStorage.getItem('token');

    return !token || this.JwtHelper.isTokenExpired(token);
  }

  /**
   * @description Verifica se token expirou
   */
  public verificarTokenExpirado(){
    const token = localStorage.getItem('token');
    return this.JwtHelper.isTokenExpired(token);
  }

  /**
   * @description 
   * Verifica o access token está definido ou não.
   */
  public verificarTokenDefinido(){
    const token = localStorage.getItem('token');
    if(token != null){
      return true;
    } else{
      return false;
    }
  }

  /**
   * 
   * @param permissao 
   * 
   * @description
   * Verifica se o token do usuário tem a permissão passada por parametro
   * 
   * @returns token && boolean
   */
  public temPermissao(permissao: string): any{
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  /**
   * @description
   * Requisita um novo access token para o backend
   * 
   * @returns void;
   */
  public requisitarNovoAccessToken(): Promise<any>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YWRtaW46QWRNaU4=');
    const body = 'grant_type=refresh_token';

    return this.http.post(this.servidor, body, { headers, withCredentials: true })
    .toPromise()
    .then(response => {
      this.armazenarToken(response.json().access_token);
      return Promise.resolve(null);
    })
    .catch(response => {
      return Promise.resolve(null);
    });
  }

  /**
   * @description Metodo que limpa o Access Token da memória do browser do usuário. 
   */
  public limparAccessToken(){
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  /**
   * @description efetua logout do usuário
   */
  public logout(){
    const servidor = this.servidorService.getServidor() + '/logout/removerToken';
    return this.http.delete(servidor, { withCredentials: true })
    .toPromise()
    .then(() => {
      this.limparAccessToken();
    });
  }

  /**
   * @description retorna token decodificado
   */
  public getTokenDecodificado(){
    this.carregarToken();
    this.jwtPayload = this.JwtHelper.decodeToken(localStorage.getItem('token'));
    return this.jwtPayload;
  }

}
