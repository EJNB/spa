import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesServices} from '../../services/heroes.services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[];
  termino: string;

  constructor(private heroesService: HeroesServices, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.termino = param['termino'];
      this.heroes = this.heroesService.buscarHeroe(param['termino']);
      console.log(this.heroes);
    });
  }

}
