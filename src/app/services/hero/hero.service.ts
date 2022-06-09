import { Injectable } from '@angular/core';
import { find, observable, Observable, of } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/moch-heros';
import { MessageService } from '../message/massage.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServ: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageServ.add('ciao, sono l\'hero service')
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageServ.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  // find(id: number) {
  //   for (const hero of HEROES) {
  //     if (hero.id === id) {
  //       return hero;
  //     }
  //     return undefined
  //   }
  // }
}

