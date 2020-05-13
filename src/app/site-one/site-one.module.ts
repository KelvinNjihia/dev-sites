import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteOneComponent } from './site-one/site-one.component';



@NgModule({
  declarations: [SiteOneComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SiteOneComponent
  ]
})
export class SiteOneModule { }
