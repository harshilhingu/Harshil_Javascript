import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { DetailedcontentComponent } from './detailedcontent/detailedcontent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchcontentComponent } from './searchcontent/searchcontent.component';

const routes: Routes = [
  { path: '', component: ContentListComponent, },
  { path: 'list', component: ContentListComponent, },
  { path: 'details/:id', component: DetailedcontentComponent, },
  { path: 'search', component: SearchcontentComponent, },
  { path: '**', pathMatch: 'full', 
        component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
