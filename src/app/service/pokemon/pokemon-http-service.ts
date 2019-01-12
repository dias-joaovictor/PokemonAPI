import { PokemonDTO } from './../../model/dto/pokemon-dto';
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class PokemonHttpService {
    //Método para listar todos;
    //Método para buscar um por vez

    constructor(private http: Http) { }

    getAllPokemons(): Observable<any> {
        return this.http.get("https://pokeapi.co/api/v2/pokemon/")
            .pipe(
                map(response => response.json())
            )
    }

}
