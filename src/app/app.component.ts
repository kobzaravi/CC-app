import { Component} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { NewService  } from './new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  readonly ROOT_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  posts!: Observable<any>;

  constructor(private newservice:NewService) {
    this.newservice.getData().subscribe(data=>{
      console.warn(data)
    })
  }

  

  getPosts(){
    
    this.posts = this.newservice.getData()
     
  }

}
