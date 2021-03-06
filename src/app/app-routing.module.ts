import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ListDetailComponent }  from './list-detail/list-detail.component';
import { ApolloComponent  } from "./apollo/apollo.component";


const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard',component:DashboardComponent},
  { path: 'detail/:id', component: ListDetailComponent },
  {path:'heroes',component:HeroesComponent},
  {path:'apollo',component:ApolloComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
