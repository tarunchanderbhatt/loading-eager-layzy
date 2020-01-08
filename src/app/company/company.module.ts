import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company.list.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompanyRoutingModule
  ],
  declarations: [
    CompanyComponent,
    CompanyListComponent
  ],
  providers: []
})
export class CompanyModule {
  constructor() {
    console.log('CompanyModule loaded.');
  }
}