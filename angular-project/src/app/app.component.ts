import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/api/giphy.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-project';
  searchGiphy: string;
  giphyResult: string;
  noResultsMessage: string;
  giphy$: Observable<any>;

  constructor(private _giphyService: GiphyService) {}

  ngOnInit(){
  }

  searchForGifs(q: string) {
    if (this.searchGiphy.length > 0) {
      this.noResultsMessage = '';
      this.giphy$ = this._giphyService.getGifs(this.searchGiphy);
      this.giphy$.subscribe((response) => {
        if (response.data.length !== 0) {
          if (response.data[0].type === 'gif') {
            this.giphyResult = 'https://media.giphy.com/media/'+ response.data[0].id +'/giphy.gif';
          }   
        } else {
          this.noResultsMessage = 'There were 0 results that matched your Input.';
          this.giphyResult = 'https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif';
        }
      }, r => {
        console.log('GET_GIPHY_ERROR', r)
      }, () => {
        this.searchGiphy = '';
      });
    }
  }
}

