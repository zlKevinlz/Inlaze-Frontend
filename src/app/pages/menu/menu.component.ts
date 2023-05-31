import { Component } from '@angular/core';
import { Subject, map, takeUntil } from 'rxjs';
import { DrinkInterface } from 'src/app/models/drink-interface';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  drinks: DrinkInterface[] = [];

  letter: string = 'A';

  loading: boolean = true;

  noResults: boolean = false;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _drinkService: DrinkService
  ){
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.getDrinksByLetter();
  }

  getDrinksByLetter(){
    this.noResults = false;
    this.loading = true;
    this.drinks = [];
    this._drinkService.listDrinks(this.letter).pipe(takeUntil(this._unsubscribeAll)).subscribe((response: any) => {
      if(response.drinks != null){
        this.drinks = response.drinks;
        console.log(this.drinks)
      }else{
        this.noResults = true;
      }
      this.loading = false;
    }, (error) => {
      //modal con mensaje de error
      this.loading = false;
    });
  }

  getLetterByPagination = (letter: string) =>{
    this.letter = letter;
    this.getDrinksByLetter();
  }

}
