import { Routes } from '@angular/router';
import {CurrentlyWatchingComponent} from "./currently-watching/currently-watching.component";
import {PrevioslyWatchingComponent} from "./previosly-watching/previosly-watching.component";
import {SuggestedToWorkComponent} from "./suggested-to-work/suggested-to-work.component";
import {HomePageComponent} from "./home-page/home-page.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  {path: 'home', component: HomePageComponent },
  {path: 'currently-watching', component:CurrentlyWatchingComponent},
  {path: 'previosly-watching', component:PrevioslyWatchingComponent},
  {path: 'suggested-to-watch', component:SuggestedToWorkComponent}
];
