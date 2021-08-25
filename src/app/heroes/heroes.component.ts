import {Component, OnInit} from '@angular/core';
import {IHero} from "../hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: IHero[] = [];

    selectedHero?: IHero;

    //injecting heroService in constructor
    constructor(private heroService: HeroService,
                private messageService : MessageService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: IHero): void {
        this.selectedHero = hero;
        this.messageService.add(`HeroesComponent : Selected hero id=${hero.id}`);
    }

    //getHeroes to retrieve heroService from service
    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

}
