import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
}
