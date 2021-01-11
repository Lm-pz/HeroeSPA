import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  public heroes:Heroe[];

  constructor(private heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {
  this.heroes=this.heroesService.getHeroes();
  console.log(this.heroes);
  }

  verHeroe(index:number){
this.router.navigate(['/heroe',index]);
  }
}

