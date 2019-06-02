import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Heroe } from '../../services/heroes.services';
import index from '@angular/cli/lib/cli';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  verHeroe() {
    console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}
