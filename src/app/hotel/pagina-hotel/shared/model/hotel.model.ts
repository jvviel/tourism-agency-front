import { Cidade } from './../../../../cidade/pagina-cidade/shared/model/cidade.model';
export class Hotel {
    id: number;
    descricao: string;
    estrelas: string;
    precoDiaria: number;
    localizacao: string;
    cafeManha: string;
    almoco: string;
    cidade: Cidade;
}
