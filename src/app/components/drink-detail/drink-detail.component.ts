import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DrinkInterface } from 'src/app/models/drink-interface';
import { DrinksByIngredientComponent } from '../drinks-by-ingredient/drinks-by-ingredient.component';
import { DrinkService } from 'src/app/services/drink.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss']
})
export class DrinkDetailComponent {

  loading: boolean = false;

  drink: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    public dialogRef: MatDialogRef<DrinkDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { drink: DrinkInterface, searchById: boolean },
    public dialog: MatDialog,
    private _drinkService: DrinkService
  ) {
    this._unsubscribeAll = new Subject();
    console.log(this.data)
    if(this.data.searchById){
      this.getDrinksById();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getDrinksById() {
    this.loading = true;
    this._drinkService.getDrinkById(this.data.drink.idDrink).pipe(takeUntil(this._unsubscribeAll)).subscribe((response: any) => {
      this.data.drink = response.drinks[0];
      this.loading = false;
    }, (error) => {
      //modal con mensaje de error
      this.loading = false;
    });
  }

  searchByIngredient(ingredient: string) {
    this.dialog.open(DrinksByIngredientComponent, {
      width: '85%',
      height: '85%',
      data: {
        ingredient: ingredient,
      },
    });
    this.dialogRef.close();
  }

}
