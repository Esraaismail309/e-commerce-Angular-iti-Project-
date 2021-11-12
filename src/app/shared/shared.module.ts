import { NavbarComponent } from './../shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
