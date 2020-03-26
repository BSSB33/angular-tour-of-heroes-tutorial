import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = [];
  
  constructor(private heroService: HeroService, private messageService: MessageService) { 
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, level: number): void {
    name = name.trim();
    level = level.valueOf();
    if (!name) { return; }
    this.heroService.addHero({ name, level } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

}
