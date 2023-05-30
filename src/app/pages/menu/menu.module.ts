import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

import {MatCardModule} from '@angular/material/card';
import { ItemComponent } from 'src/app/components/item/item.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';


@NgModule({
  declarations: [MenuComponent, ItemComponent, PaginationComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatCardModule
  ]
})
export class MenuModule { }
