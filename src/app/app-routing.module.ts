import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { ContactusComponent } from './contactus.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { CustompreloadingStrategyService } from './custompreloading-strategy.service';

const routes: Routes = [
   {
      path: 'contactus', component: ContactusComponent
   },
   { path: '', redirectTo: 'contactus', pathMatch: 'full' },
   // { path: '', redirectTo: '/company', pathMatch: 'full' },

   //Till angular 7
   // { path: 'company', loadChildren: 'src/app/company/company.module#CompanyModule' },
   // { path: 'person', loadChildren: 'src/app/person/person.module#PersonModule' },

   //Angular 8 and above
   // { path: 'company', loadChildren: () => import('src/app/company/company.module').then(m1 => m1.CompanyModule), data: { preload: true } },
   { path: 'company', loadChildren: () => import('src/app/company/company.module').then(m1 => m1.CompanyModule), data: { preload: true, delay: true } },
   // { path: 'person', loadChildren: () => import('src/app/person/person.module').then(m => m.PersonModule) , data: { preload: true }},
   { path: 'person', loadChildren: () => import('src/app/person/person.module').then(m => m.PersonModule) },


   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes
         // , { preloadingStrategy: PreloadAllModules }
         // , { preloadingStrategy: NoPreloading }
         , { preloadingStrategy: CustompreloadingStrategyService }
      )
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { } 