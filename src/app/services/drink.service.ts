import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environmets/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(
    public _httpClient : HttpClient
  ) { }

  listDrinks(letter: string){
    return this._httpClient.get(`${environment.APIURL}/search.php?f=${letter}`);
    //return this._httpClient.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  }
}
