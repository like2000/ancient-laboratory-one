import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {AlbumComponent} from './core/album/album.component';
import {ZenComponent} from './core/zen/zen.component';
import {JournalComponent} from './core/journal/journal.component';


const routes: Routes = [
  {path: 'zen', component: ZenComponent},
  {path: 'home', component: HomeComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'journal', component: JournalComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], // super important not to interfere with Flask routes
  exports: [RouterModule]
})
export class AppRoutingModule {
}
