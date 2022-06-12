import { Component} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  readonly ROOT_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  posts!: Observable<any>;

  constructor(private http: HttpClient) {}

  

  getPosts(){
    let params =  new HttpParams().set('base_ccy','UAH');
    this.posts = this.http.get(this.ROOT_URL, {params});
   
  }

}
