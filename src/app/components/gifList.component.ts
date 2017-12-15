import { Component } from '@angular/core';
import { PostsService } from '../services/posts.services'
import { GifService } from '../services/gif.service'

@Component({
  selector: 'gifList',
  styleUrls: ['../app.component.css'],
  template: `
  <div class="gif-container">
  <div></div>
  <div class="search">
    <input placeholder="Search Terms" type="text" name="gifQuery" [(ngModel)]="gifQuery"><button (click)="searchGifs(gifQuery)">Search Gifs</button>
  </div>
  <div></div>
    <div class="giphies" *ngFor="let gif of gifs">
      <h3>{{gif.title}}</h3>
      <img src={{gif.images.downsized.url}}/>
    </div>
  </div>
  `,
  providers: [GifService]
})
export class GifListComponent {
  gifs: object[];

  constructor(private gifService: GifService) {
    this.gifs = []
  }

  searchGifs(query){
    this.gifService.sendSearch(query).subscribe(gif => {
      this.gifs = gif.data
    })
  }
}
