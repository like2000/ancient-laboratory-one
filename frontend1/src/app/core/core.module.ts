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
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlbumDialogComponent} from './album/album-dialog/album-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {AlbumCardComponent} from './album/album-card/album-card.component';
import {ZenComponent} from './zen/zen.component';
import {JournalComponent} from './journal/journal.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    HomeComponent,
    AlbumComponent,
    HomeDialogComponent,
    AlbumFilesComponent,
    AlbumDialogComponent,
    AlbumCardComponent,
    ZenComponent,
    JournalComponent,
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
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [
    // AlbumCardService,
    // JournalService,
  ],
  bootstrap: []
})
export class CoreModule {
}
