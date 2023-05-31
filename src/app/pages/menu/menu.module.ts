import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

import { ItemComponent } from 'src/app/components/item/item.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { DrinkDetailComponent } from 'src/app/components/drink-detail/drink-detail.component';
import {MatIconModule} from '@angular/material/icon';
import { DrinksByIngredientComponent } from 'src/app/components/drinks-by-ingredient/drinks-by-ingredient.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [MenuComponent, ItemComponent, PaginationComponent, DrinkDetailComponent, DrinksByIngredientComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    NgxSkeletonLoaderModule
  ]
})
export class MenuModule { }
