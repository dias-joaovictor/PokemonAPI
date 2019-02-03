import { PokemonHttpService } from './../../service/pokemon/pokemon-http-service';
import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { PokemonPageDTO } from 'src/app/model/dto/pokemonPage-dto';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/model/dto/pokemon-dto';
import { PokemonResultDTO } from 'src/app/model/dto/pokemonResult-dto';
import { EventEmitter } from 'events';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


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
  closeResult: string;
  pokemon: Pokemon;




  constructor(private pokemonHttpService: PokemonHttpService,
    private route: ActivatedRoute, private router: Router, private modalService: NgbModal) { }


  ngOnInit() {
    this.page = this.route.snapshot.params['page'];
    if (!this.page || this.page < 1 || this.isNextBlocked()) {
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
    this.nextPagenmbr = +this.page + 1;
    this.previousPagenmbr = +this.page - 1;
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

  loadPokemon(url: String) {
    this.pokemonHttpService.getPokemonByUrl(url).subscribe(item => { this.pokemon = item; });
  }

  open(content, url: String) {
    this.loadPokemon(url);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}



