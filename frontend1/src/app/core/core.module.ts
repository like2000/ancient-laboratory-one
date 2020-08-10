import {NgModule} from '@angular/core';
import {AlbumFilesComponent} from './album/album-files/album-files.component';
import {AlbumComponent} from './album/album.component';
import {HomeComponent} from './home/home.component';
import {HomeDialogComponent} from './home/home-dialog/home-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    HomeComponent,
    AlbumComponent,
    HomeDialogComponent,
    AlbumFilesComponent,
  ],
  imports: [
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule {
}
