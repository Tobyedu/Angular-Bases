import { Component, ElementRef, Injectable, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'app-search-box',
  template: `

  <h5>Buscar: </h5>
  <input type="text"
  placeholder="Buscar gifs..."
  class="form-control"
  (keyup.enter)="searchTag()"
  #txtTagInput
  >

  `
})
export class SearchBoxComponent {


    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;

    constructor(private gifsService: GifsService) { }

    searchTag(){
      const newTag = this.tagInput.nativeElement.value;

      this.gifsService.searchTag(newTag);
      this.tagInput.nativeElement.value = '';
    }

}
