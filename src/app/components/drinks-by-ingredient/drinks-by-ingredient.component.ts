import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DrinkService } from 'src/app/services/drink.service';
import { MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-drinks-by-ingredient',
  templateUrl: './drinks-by-ingredient.component.html',
  styleUrls: ['./drinks-by-ingredient.component.scss']
})
export class DrinksByIngredientComponent {

  loading : boolean = true;

  drinksByIngredient : Array<any> = [];

  private _unsubscribeAll: Subject<any>;

  constructor(
    public dialogRef: MatDialogRef<DrinksByIngredientComponent>,
    private _drinkService : DrinkService,
    @Inject(MAT_DIALOG_DATA) public data: {ingredient: string}
  ){
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    if(this.data.ingredient){
      this.searchByIngredient(this.data.ingredient);
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }

  searchByIngredient(ingredient : string){
    this.loading = true;
    this._drinkService.searchDrinksByIngredient(ingredient).pipe(takeUntil(this._unsubscribeAll)).subscribe((response: any) => {
      if(response.drinks != null){
        this.drinksByIngredient = response.drinks;
        console.log(this.drinksByIngredient)
      }
      this.loading = false;
    }, (error) => {
      //modal con mensaje de error
      this.loading = false;
    });
  }
}
