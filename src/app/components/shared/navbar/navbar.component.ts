import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesServices} from '../../../services/heroes.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(value: string) {
    this.router.navigate(['/buscar', value]);
  }

}
