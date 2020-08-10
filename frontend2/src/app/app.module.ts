import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent, HomeDialogComponent} from './home/home.component';
import {AlbumComponent} from './album/album.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HomeSnackbarComponent} from './home/home-snackbar/home-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDialogComponent,
    AlbumComponent,
    HomeSnackbarComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
