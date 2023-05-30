import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  drinks: Array<any> = [];

  letter: string = 'A';

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _drinkService: DrinkService,
  ){
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.getDrinksByLetter();
  }

  getDrinksByLetter(){
    this._drinkService.listDrinks(this.letter).pipe(takeUntil(this._unsubscribeAll)).subscribe((response: any) => {
      console.log(response)
      this.drinks = response.drinks;
      //this.spinner.hide();
    }, (error) => {
      //this.message = 'Ha ocurrido un error';
      //this.clearAlert();
    });
  }

  getLetterByPagination = (letter: string) =>{
    this.letter = letter;
    this.getDrinksByLetter();
  }


}
