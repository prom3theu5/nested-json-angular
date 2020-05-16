import { NgModule } from '@angular/core';

import { MatCardModule, MatTabsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, MatTableModule } from '@angular/material';


@NgModule({
  exports: [
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule
  ]
})
export class UserMaterialModule {}