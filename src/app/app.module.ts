import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './components/dialog-ask-mode/start/start.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAskModeComponent } from './components/dialog-ask-mode/dialog-ask-mode.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CurrentWorkDayComponent } from './components/current-work-day/current-work-day.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DialogLeavingWorkComponent } from './components/current-work-day/dialog-leaving-work/dialog-leaving-work.component';
import {MatIconModule} from '@angular/material/icon';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { BrowserModule } from '@angular/platform-browser'

// import {JdatePipe} from 'ngx-persian';
// import { PersianPipesModule } from 'ngx-persian-pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    DialogAskModeComponent,
    CurrentWorkDayComponent,
    DialogLeavingWorkComponent,
    AdminPanelComponent
    // BrowserModule
    // PersianPipesModule
    // JdatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatIconModule,
    NgxStarRatingModule,
    CommonModule ,
    MatSlideToggleModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
