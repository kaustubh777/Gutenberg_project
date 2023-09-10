import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCatCmpComponent } from './app-cat-cmp/app-cat-cmp.component';
import { CatDetailCmpComponent } from './cat-detail-cmp/cat-detail-cmp.component';
import { CatListCmpComponent } from './cat-list-cmp/cat-list-cmp.component';
import { SingleBookCmpComponent } from './single-book-cmp/single-book-cmp.component';
import { LinknotfoundComponent } from './linknotfound/linknotfound.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { ScrollDirective } from './shared/directives/scroll.directive';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    AppCatCmpComponent,
    CatDetailCmpComponent,
    CatListCmpComponent,
    SingleBookCmpComponent,
    LinknotfoundComponent,
    TruncatePipe,
    ScrollDirective,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
