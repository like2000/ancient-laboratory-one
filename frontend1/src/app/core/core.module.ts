import {NgModule} from '@angular/core';
import {AlbumFilesComponent} from './album/album-files/album-files.component';
import {AlbumComponent} from './album/album.component';
import {HomeComponent} from './home/home.component';
import {HomeDialogComponent} from './home/home-dialog/home-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {AlbumCardsService} from './album/album-cards.service';
import {HttpClientModule} from '@angular/common/http';


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
    MatGridListModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [AlbumCardsService],
  bootstrap: []
})
export class CoreModule {
}
