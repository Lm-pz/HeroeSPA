import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroe:Heroe;

  constructor(private ativatedRoute:ActivatedRoute, private heroeService : HeroesService) {
    this.ativatedRoute.params.subscribe(params =>{this.heroe=this.heroeService.getHeroe(params['id']);});
  }

  ngOnInit(): void {
  }

}
