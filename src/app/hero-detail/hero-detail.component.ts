import {Component, Input, OnInit} from '@angular/core';
import {IHero} from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //@input () lets parent component "IHero" to update the data from the child component "hero-detail"
  @Input() hero?: IHero;

  constructor() { }

  ngOnInit(): void {
  }

}
