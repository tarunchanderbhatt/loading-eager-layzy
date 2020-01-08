import { Component } from '@angular/core';
@Component({
	template: `
	   <h2>Welcome to Company Home</h2>
	   <a [routerLink]="['company-list']">View Company List</a>
	   <router-outlet></router-outlet>	
  `
})
export class CompanyComponent { 
}
    