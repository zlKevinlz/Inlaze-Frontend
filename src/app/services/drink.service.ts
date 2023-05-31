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
  }

  searchDrinksByIngredient(ingredient: string){
    return this._httpClient.get(`${environment.APIURL}/filter.php?i=${ingredient}`);
  }

  getDrinkById(id: string){
    return this._httpClient.get(`${environment.APIURL}/lookup.php?i=${id}`);
  }
}
