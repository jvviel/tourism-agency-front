import { Despesa } from './../../../../despesas/pagina-despesas/shared/model/despesa.model';
import { Hotel } from './../../../../hotel/pagina-hotel/shared/model/hotel.model';
import { Categoria } from './../../../../categoria/shared/model/categoria.model';

export class Viagem {
    id: number;
    descricao: string;
    valorPessoa: number;
    dataSaida: Date;
    dataRetorno: Date;
    quantidadeDias: number;
    quantidadePessoas: number;
    margemLucro: number;
    categoria: Categoria;
    hotel: Hotel;
    despesas: Despesa[];
}
