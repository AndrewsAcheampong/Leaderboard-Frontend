import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:" " , redirectTo:"input", pathMatch:"full"},
  {path: "input" , component:LeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
