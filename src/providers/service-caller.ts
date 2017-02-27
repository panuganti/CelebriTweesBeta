import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Tweet } from '../library/tweet';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceCaller {
  apiUrl: string = "http://newsswipesserver20160101.azurewebsites.net";

  constructor(public http: Http) {
    console.log('Hello ServiceCaller Provider');
  }

  getFeed(uid: string, skip: number): Observable<Tweet[]> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let feed = this.http.get(this.apiUrl + "/feed/" + uid + "/" + skip,
      { headers: headers }).map(res => res.json());
    return feed;
  }

  getTrending() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let feed = this.http.get(this.apiUrl + "/feed/trending",
      { headers: headers }).map(res => res.json());
    return feed;
  }

}
