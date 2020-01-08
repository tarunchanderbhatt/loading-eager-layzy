import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company.list.component';

const companyRoutes: Routes = [
	{
		// path: 'company', component: CompanyComponent,
		path: '', component: CompanyComponent,
		children: [
			{ path: 'company-list', component: CompanyListComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(companyRoutes)],
	exports: [RouterModule]
})
export class CompanyRoutingModule { }
