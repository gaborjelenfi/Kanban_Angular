import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
