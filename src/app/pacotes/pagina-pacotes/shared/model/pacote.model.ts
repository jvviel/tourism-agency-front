import { Viagem } from './../../../../viagem/pagina-viagem/shared/model/viagem.model';
export class Pacote {
    id: number;
    descricao: string;
    viagem: Viagem;
    quantidadePessoas: number;
    valorTotal: number;
}
