import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }
  nombre;
  ngOnInit() {
    this.nombre= this.activeRoute.snapshot.paramMap.get('nombre')
  }

}
