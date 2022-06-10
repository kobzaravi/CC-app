import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Currency } from './currency';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  readonly ROOT_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  currencys: Observable<Currency[]> | undefined;

  constructor(private http: HttpClient) {}

  getCurrencys(){
    this.currencys = this.http.get<Currency[]>(this.ROOT_URL + '/currency?cc="USD"')
  }

}
