import {Injectable} from '@angular/core';
import {IHero} from "./hero";
import {Observable, of} from "rxjs";
import {HEROES} from "./mock-heroes"
import {MessageService} from "./message.service";

/*
@injectable() make the class to participate on dependency injection
instead of creating the service with new keyword
*/

//it accept metadata object for services like component decorator did for component class

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService : MessageService) { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService:fetched heroes');
    return heroes;

    //or

    // return of(HEROES);


  }

}
