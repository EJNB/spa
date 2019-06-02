import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterStateSnapshot} from '@angular/router';
import {Heroe, HeroesServices} from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;
  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesServices) { }

  ngOnInit() {
    // console.log('Since snapshot property', this.activateRoute.snapshot.paramMap.get('id'));
    // this.activateRoute.params.subscribe(param => {
    //   // console.log('Since params observable', param['id']);
    // });
    const id = +this.activateRoute.snapshot.paramMap.get('id');
    this.heroe = this.heroesService.getHeroe(id);
    // console.log(this.heroesService.getHeroe(id));
  }
}
