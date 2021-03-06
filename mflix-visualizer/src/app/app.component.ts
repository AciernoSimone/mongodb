
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mflix-visualizer';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient, private sanitizer: DomSanitizer){}

  load10Movies()
  {
    this.obs = this.http.get("https://3010-f07b3e86-9f16-43c5-b1ab-0104e4199041.ws-eu01.gitpod.io/users");
    this.obs.subscribe(this.getData);
  }
    loadHorrorMovies()
  {
    this.obs = this.http.get("https://3010-e263c9de-5d18-4273-affb-3f50cfa486a6.ws-eu01.gitpod.io/horror");
    this.obs.subscribe(this.getData);
  }
    loadComedyMovies()
  {
    this.obs = this.http.get("https://3010-f07b3e86-9f16-43c5-b1ab-0104e4199041.ws-eu01.gitpod.io/comici");
    this.obs.subscribe(this.getData);
  }

  getData = (data) => {
    this.results = data;
  }

  photoURL(urltoSanitize) {

    return this.sanitizer.bypassSecurityTrustUrl(urltoSanitize);
}
}
