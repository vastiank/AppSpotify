import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify Service!!!");
  }


  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAGqmXoTe8hauahg_10dp-UfWxsztqGM6p39NT4L0KOsd_lYyDLYyvBtCR6i0S_woDsHXXEr-PD3EIEnsI'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map(data => data['albums'].items));
  }

  getArtist(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAGqmXoTe8hauahg_10dp-UfWxsztqGM6p39NT4L0KOsd_lYyDLYyvBtCR6i0S_woDsHXXEr-PD3EIEnsI'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe(map(data => data['artists'].items));
  }
}
