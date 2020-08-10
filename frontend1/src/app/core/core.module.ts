import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlbumFilesComponent} from './album/album-files/album-files.component';
import {AlbumComponent} from './album/album.component';
import {HomeComponent} from './home/home.component';
import {HomeDialogComponent} from './home/home-dialog/home-dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    AlbumComponent,
    HomeDialogComponent,
    AlbumFilesComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule {
}
