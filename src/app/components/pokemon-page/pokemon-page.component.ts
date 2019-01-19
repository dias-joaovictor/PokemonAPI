import { PokemonHttpService } from './../../service/pokemon/pokemon-http-service';
import { PokemonDTO } from './../../model/dto/pokemon-dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  pokemons: PokemonDTO[] = [];

  constructor(private pokemonHttpService: PokemonHttpService) { }

  ngOnInit() {
    this.pokemonHttpService.getAllPokemons().subscribe(itens => this.pokemons = itens.results
    );
  }

}
