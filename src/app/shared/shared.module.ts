import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { starComponenet } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    starComponenet
  ],
  imports: [
    CommonModule
  ],
  exports :[
    CommonModule,
    FormsModule,
    starComponenet
  ]
})
export class SharedModule { }
