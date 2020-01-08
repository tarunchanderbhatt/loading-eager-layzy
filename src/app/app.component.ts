import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'app-root',
	template: `
	<nav [ngClass] = "'menu'">
	  <ul>
		 <li><a routerLink="/company" routerLinkActive="active">Company</a></li>
		 <li><a routerLink="/person" routerLinkActive="active">Person</a></li>
		 <li><a routerLink="/contactus" routerLinkActive="active">Contact Us</a></li>
	  </ul> 
	</nav>  

	<br/>
	<h1 class="text-danger" >Sahosoft</h1>
	<button class="btn btn-success" >Save </button>

<input type="button" class="btn btn-primary" (click)="myNavigate()" value="Navigate" />

	<div [ngClass] = "'parent-container'">	
	  <router-outlet></router-outlet>	
	</div>
  `
})
export class AppComponent {

	constructor(private router: Router) {

	}

	myNavigate() {
		//this.router.navigate(['/person']);

		this.router.navigateByUrl('/person');
	}
}
