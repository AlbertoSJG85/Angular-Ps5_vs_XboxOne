import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playstation',
  templateUrl: './playstation.component.html',
  styleUrls: ['./playstation.component.css']
})
export class PlaystationComponent {

  constructor(private router: Router) { }

  comprar() {
    this.router.navigateByUrl("/formulario")
  }

}
