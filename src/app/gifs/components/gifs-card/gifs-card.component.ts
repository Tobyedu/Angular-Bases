import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gifsito!: Gif;

  ngOnInit(): void {
    if(!this.gifsito) throw new Error('GifsCardComponent: No se ha recibido un gif');
  }
}
