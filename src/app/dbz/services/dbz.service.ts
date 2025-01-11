
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {


  public characters:Character[]=[
    {
      id: uuid(),
      name:'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name:'Vegeta',
      power:9500
    },
    {
      id: uuid(),
      name:'Goku',
      power:10000
    }
  ];

  public addCharacter(character: Character):void {
    console.log('MainPageComponent');

    const NewCharacter: Character= {
      id: uuid(),
      ...character
    }

    this.characters.push(NewCharacter);
  }

  public onDeleteCharacterById (index: string): void {



     this.characters = this.characters.filter((character) => character.id !== index);

  }


}
