import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', loadChildren: 'src/app/landing-page/landing-page.module#LandingPageModule'},
  {path: '**', loadChildren: 'src/app/landing-page/landing-page.module#LandingPageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
