import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent
=======
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FilterdBike } from './pipes/filteringbikebytypes.pipe';
import { FilteringBikeByAuthor } from './pipes/filteringbikesbyauthor.pipe';
import { HighlightImportantDataDirective } from './highlight-important-data.directive';
import { DetailedcontentComponent } from './detailedcontent/detailedcontent.component';
import { SearchcontentComponent } from './searchcontent/searchcontent.component';
import { DetailcardComponent } from './detailcard/detailcard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContentLinksComponent } from './content-links/content-links.component';
import { ContentChangeComponent } from './content-change/content-change.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { ChangeContentComponent } from './change-content/change-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    FilterdBike,
    FilteringBikeByAuthor,
    HighlightImportantDataDirective,
    DetailedcontentComponent,
    SearchcontentComponent,
    DetailcardComponent,
    PagenotfoundComponent,
    ContentLinksComponent,
    ContentChangeComponent,
    ChangeContentComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      delay: 1000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
