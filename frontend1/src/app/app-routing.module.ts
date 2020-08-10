import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {AlbumComponent} from './core/album/album.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'album', component: AlbumComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
