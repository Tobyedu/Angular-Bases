import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',

  templateUrl: 'character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();



  public character : Character = {
    name: 'amjumjum',
    power: 0
  }


  emitCharacter(): void{



    // console.log(this.character);
    if(this.character.name.length === 0 ) return;

    //con este metodo envio las datos al padre

    this.onNewCharacter.emit(this.character);

    this.character = {name:'', power:0};

    // this.character.name="";
    // this.character.power=0;
  }
}
