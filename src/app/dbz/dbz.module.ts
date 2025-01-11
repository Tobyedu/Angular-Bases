import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import {CharacterComponent} from './components/character/character.component';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [

    MainPageComponent,
    ListComponent,
    CharacterComponent,
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class DbzModule { }
