import { PokemonResultDTO } from '../../model/dto/pokemonResult-dto';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { PokemonPageDTO } from 'src/app/model/dto/pokemonPage-dto';

@Injectable()
export class PokemonHttpService {
    // Método para listar todos;
    // Método para buscar um por vez

    constructor(private http: Http) { }

    getAllPokemons(): Observable<PokemonPageDTO> {
        return this.http.get('https://pokeapi.co/api/v2/pokemon/')
            .pipe(
                map(response => response.json())
            );
    }



    getPokemonsWhithLimitOffSet(offset: number, limit: number): Observable<any> {
        return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=' + limit + '&offset=' + offset)
            .pipe(
                map(response => response.json())
            );
    }

}
