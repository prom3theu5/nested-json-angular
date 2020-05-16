import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { UserComponent } from './containers/user.component';

import { HasRelativeTableComponent } from './components/has-relative-table/has-relative-table.component';
import { HasPhoneTableComponent } from './components/has-phone-table/has-phone-table.component';
import { TableRowComponent } from './components/table-row/table-row.component';

import { UserMaterialModule } from './user-material.module';


@NgModule({
  imports: [
    CommonModule,
    UserMaterialModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [
    UserComponent,
    HasRelativeTableComponent,
    HasPhoneTableComponent,
    TableRowComponent
  ],
  providers: [ ],
  exports: [ UserComponent ],
  
})
export class UserModule { }