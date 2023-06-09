import { Component, Input } from '@angular/core';
import { DrinkDetailComponent } from '../drink-detail/drink-detail.component';


import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() drink : any;

  constructor(
    public dialog: MatDialog,
  ){
    console.log(this.drink)
  }

  ngOnInit(): void {
  }

  imageReady() {
      this.drink.ready = true;
  }

  openDetail(){
    this.dialog.closeAll();
    this.dialog.open(DrinkDetailComponent , {
      width: '85%',
      height: 'auto',
      minHeight: '44%',
      maxHeight: '85%',
      data: {
        drink: this.drink,
        searchById: this.drink.strInstructions ? false : true
      },
    });

  }

}
