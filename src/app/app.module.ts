import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, TableComponent, SearchComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
