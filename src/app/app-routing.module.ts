import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilViewComponent } from './components/appareil-view/appareil-view.component';
import { AuthComponent } from './components/auth/auth.component';
import { SingleAppareilComponent } from './components/single-appareil/single-appareil.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';

// tableau objet type route : 
const appRoutes: Routes = [
  { path: 'appareils', canActivate:[AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate:[AuthGuard], component : SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  //{ path: '', redirectTo: "appareils" },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: "not-found" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
