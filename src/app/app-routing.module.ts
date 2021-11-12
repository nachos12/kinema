import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmPageComponent } from './film/film-page/film-page.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {

    path: "film",
    children: [
      { path: "", component: FilmPageComponent, pathMatch: "full" },
     // { path: "new", component: , pathMatch: "full" },
      //{ path: ":id", component: , pathMatch: "prefix" },

    ]},
    {
    path: "reservation",
    children: [
      { path: "", component: ReservationComponent, pathMatch: "full" },
     // { path: "new", component: , pathMatch: "full" },
      //{ path: ":id", component: , pathMatch: "prefix" },

    ]
  },
  //{ path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
