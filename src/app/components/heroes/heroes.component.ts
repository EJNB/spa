import {Component, OnInit} from '@angular/core';
import {HeroesServices} from '../../services/heroes.services';
import { Heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];

  constructor(private heroesService: HeroesServices, private router: Router) {
    // console.log('constructor');
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
