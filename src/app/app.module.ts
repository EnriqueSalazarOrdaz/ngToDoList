import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { AddToDoComponent } from './component/add-to-do/add-to-do.component';
import { ToDoItemComponent } from './component/to-do-item/to-do-item.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AddToDoComponent,
    ToDoItemComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
