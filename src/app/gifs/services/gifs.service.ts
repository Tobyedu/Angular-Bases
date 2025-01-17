import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[]= [];
  private _tagsHistoty: string[] = [];
  private apiKey:       string = 'XI8Lyzv42he9OI27zWSIONLFURF8QuQq';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';


  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(){
    return [...this._tagsHistoty];
  }

private organizateHistory(tag: string){
  tag = tag.toLowerCase();

  //si existe en el array se buscara y se eliminara
  if(this._tagsHistoty.includes(tag)){
    //filter esta haciendo una busqueda que sean diferentes al tag
    //ejemplo si el tag es perro, entonces el tag que sea diferente a perro
    //se guardara en el array
    this._tagsHistoty = this._tagsHistoty
    .filter((oldTak)=> oldTak !== tag);

  }
  //lo inserte al principio del array
  this._tagsHistoty.unshift(tag);
  this._tagsHistoty = this._tagsHistoty.splice(0, 10);
  this.localStorage();

}

private localStorage(): void{
  localStorage.setItem('tags', JSON.stringify(this._tagsHistoty));

}

private loadLocalStorage(): void{

  if(!localStorage.getItem('tags')) return;

  this._tagsHistoty = JSON.parse(localStorage.getItem('tags')!);

  if(this._tagsHistoty.length === 0) return;
  this.searchTag(this._tagsHistoty[0]);

}



  searchTag(tag: string):void{

    if(tag.length === 0) return;
    this.organizateHistory(tag)

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
        .subscribe(res => {
          this.gifList = res.data;
          console.log({gifs: this.gifList});
        });


    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
    //   .then((response)=> response.json())
    //   .then(data => console.log(data) )


    // this._tagsHistoty.unshift(tag);
    // console.log(this.tagsHistory);
  }

}
