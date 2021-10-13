import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsFormComponent } from './user-details/user-details-form/user-details-form.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListFormComponent } from './user-details/user-list-form/user-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserDetailsFormComponent,
    UserListFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'add', component: UserDetailsFormComponent },
      { path: 'list', component: UserListFormComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
