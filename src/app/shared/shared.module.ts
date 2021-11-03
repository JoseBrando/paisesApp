import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { InputComponent } from './pais/input/input.component';
import { TableComponent } from './pais/table/table.component';



@NgModule({
  declarations: [
    SidebarComponent,
    InputComponent,
    TableComponent
  ],
  exports: [
    SidebarComponent,
    InputComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
