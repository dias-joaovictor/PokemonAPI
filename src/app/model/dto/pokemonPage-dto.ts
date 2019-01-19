import { PokemonResultDTO } from './pokemonResult-dto';

export class PokemonPageDTO {

    count: number;
    next: String;
    previous: String;
    results: PokemonResultDTO[];

    constructor() {

    }

}
