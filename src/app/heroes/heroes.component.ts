import {Component, OnInit} from '@angular/core';
import {IHero} from "../hero";
import {HeroService} from "../hero.service";


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: IHero[] = [];

    selectedHero?: IHero;

    //injecting heroService in constructor
    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    //getHeroes to retrieve heroService from service
    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

}
