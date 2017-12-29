import { Component } from '@angular/core';
import { GifService } from '../services/gif.service'

@Component({
  selector: 'gifList',
  styleUrls: ['../app.component.css'],
  template: `

  <div class="gif-container">
  <div><h1>Giphy Search App</h1><p>built using angular</p></div>
  <div class="search">
    <input placeholder="Search Terms" type="text" name="gifQuery" [(ngModel)]="gifQuery"><button (click)="searchGifs(gifQuery)">Search Gifs</button>
  </div>
  <div><a href="https://github.com/joshlacey/GiphyApp">Check out the code</a></div>
    <div class="giphies" *ngFor="let gif of gifs">
      <h3>{{this.pattern.test(gif.title) ? gif.title : "untitled"}}</h3>
      <img src={{gif.images.downsized.url}}/>
    </div>
  </div>
  `,
  providers: [GifService]
})

export class GifListComponent {
  gifs: object[];
  pattern;
  gifQuery;

  constructor(private gifService: GifService) {
    this.gifs = []
    this.pattern = new RegExp('[A-Za-z0-9]')
  }

  searchGifs(query){
    this.gifService.sendSearch(query).subscribe(gif => {
      this.gifs = gif.data
      console.log(gif.data)
    })
  }
}
