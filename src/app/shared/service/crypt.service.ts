import { Injectable } from '@angular/core';
import jsSHA from 'jssha';
@Injectable({
  providedIn: 'root'
})

/**
 * @author Luis Franco
 * 
 * @description
 * Serviço injetável geral para criptografia, possui metodos para criptografar string em
 * Hexadecimal Homofônica e SHA512.
 * 
 */
export class CryptService{

  private chars = [90,110,117,57,75,50,53,74,89,51,80,97,72,55,80,68,102,77,120,111,121,54,51,
    66,86,57,90,87,99,56,75,117];

  private pwd: string = ''

  /**
   * @description
   * Criptografa chave de segurança da criptografia homofônica,
   * instanciada automaticamente ao chamar metodo criptografarParaHexadecimal
   * 
   * @see criptografarParaHexadecimal
   */
  private criptografarPwd(): void{
    this.pwd = '';
    for(let i: number = 0; i < this.chars.length; i++){
      this.pwd += String.fromCharCode(this.chars[i]);
    }
  }

  /**
   * 
   * @param chave 
   * 
   * @description
   * Criptografa uma String em Hexadecimal Homofônica
   * 
   * @returns string
   */
  public criptografarParaHexadecimal(chave: string): string{

    this.criptografarPwd();
    let cript: string = '';
    let b: string = '';
    let p: string = '';
    let j: number = 0;
    let a1: number = 0;
    let a2: number = 0;
    let a3: number = 0;
    for (let i = 0; i < this.pwd.length; i++) {
       p += this.pwd.charCodeAt(i);
    }

    for (let i: number = 0; i < chave.length; i++){
      a1 = p.charCodeAt(j);
      j++;
      if(j == p.length){
        j = 0;
      }
      a2 = chave.charCodeAt(i);
      a3 = a1 ^ a2;

      b = a3.toString(16);
      if(b.length < 2){
        b = "0" + b;
      }

      cript += b;
    }

    return cript;
  }

  /**
   * 
   * @param mensagem 
   * 
   * @description
   * Criptografa uma string em SHA512
   * 
   * @returns string
   */
  public criptografarParaSha512(mensagem: string): string{
    let objetoSha = new jsSHA('SHA-512','TEXT');
    objetoSha.update(mensagem);
    let sha = objetoSha.getHash('HEX');
    return sha.toString();
  }
}