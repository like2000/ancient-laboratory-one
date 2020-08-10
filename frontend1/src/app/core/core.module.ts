import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AlbumComponent} from './album/album.component';
import {MatIconModule} from '@angular/material/icon';
import {HomeDialogComponent} from './home/home-dialog/home-dialog.component';


@NgModule({
  declarations: [HomeComponent, AlbumComponent, HomeDialogComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CoreModule {
}
