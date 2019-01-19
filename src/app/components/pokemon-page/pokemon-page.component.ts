import { PokemonHttpService } from './../../service/pokemon/pokemon-http-service';
import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { PokemonPageDTO } from 'src/app/model/dto/pokemonPage-dto';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit, AfterContentInit {
  pokemonPageDTO: PokemonPageDTO;

  page: number;
  offset: number;
  limit: number;
  nextPagenmbr: number;
  previousPagenmbr: number;

  constructor(private pokemonHttpService: PokemonHttpService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.page = this.route.snapshot.params['page'];
    if (!this.page || this.page < 1) {
      this.loadFirstPokemons();
    } else {
      this.loadPage();
    }
    this.checkOffsetndLimit();

  }

  ngAfterContentInit() {

  }

  loadFirstPokemons() {
    this.checkOffsetndLimit();
    this.page = 1;
    this.router.navigateByUrl('/pokepage/' + this.page);
    this.loadPage();

  }

  loadPage() {
    this.offset = 20 * (this.page - 1);
    this.limit = 20;
    this.pokemonHttpService.getPokemonsWhithLimitOffSet(this.offset, this.limit)
      .subscribe(item => { this.pokemonPageDTO = item; });
    this.nextPagenmbr = this.page;
    this.nextPagenmbr++;
    this.previousPagenmbr = this.page - 1;
  }

  checkOffsetndLimit() {
    if (!this.offset) {
      this.offset = 0;
    }
    if (!this.limit) {
      this.limit = 20;
    }
  }

  nextPage() {
    if (!this.isNextBlocked()) {
      this.page++;
    }


    this.router.navigateByUrl('/pokepage/' + this.page);
    this.loadPage();
  }

  previousPage() {
    if (!this.isPreviousBlocked()) {
      this.page -= 1;
    }
    this.router.navigateByUrl('/pokepage/' + this.page);
    this.loadPage();
  }

  isNextBlocked(): boolean {
    if (this.pokemonPageDTO) {
      const aux = Math.ceil(this.pokemonPageDTO.count / this.limit);
      return this.page === aux;
    }
  }

  isPreviousBlocked(): boolean {
    return this.page <= 1;
  }
}



