import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public HerList:string[] = ["Spiderman", "Ironman", "Hulk", "Thor"];
  public deleteHero?: string;


  public removeLastHero(): void{
    let a = this.HerList.pop();
    this.deleteHero = a;


  }


}
