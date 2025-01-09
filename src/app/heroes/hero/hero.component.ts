import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public almacen: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public name: string = "IronMan";
  public age:number = 45;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = "Spiderman";

  }
  changeAge():void {
    this.age = 30;

  }

  resetForm(): void {
    this.name = 'IronMan';
    this.age = 45;
  }




}
