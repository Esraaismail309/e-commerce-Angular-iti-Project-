import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//components
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
    
    exports: [LogInComponent,RegisterComponent]
})
export class UserModule { }
