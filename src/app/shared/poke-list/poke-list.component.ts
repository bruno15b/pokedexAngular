import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent {
  constructor(private pokeApiService: PokeApiService) {
    pokeApiService.apiListAllPokemons.subscribe((res) => console.log(res));
  }
}
