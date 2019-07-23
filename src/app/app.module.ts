import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { AdsListComponent } from './components/main/content/ads-list/ads-list.component';
import { AdComponent } from './components/main/content/ads-list/ad/ad.component';
import { ContentComponent } from './components/main/content/content.component';
import { PagesPaginatorComponent } from './components/main/content/pages-paginator/pages-paginator.component';
import { SortingPaginatorComponent } from './components/main/content/sorting-paginator/sorting-paginator.component';
import { EditorModule } from './components/editor/editor.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MainModule } from './components/main/main.module';

@NgModule({
  declarations: [
    AppComponent
    // EditorComponent,
    // HeaderComponent,
    // FooterComponent,
    // MainComponent,
    // SidebarComponent,
    // AdsListComponent,
    // AdComponent,
    // ContentComponent,
    // PagesPaginatorComponent,
    // SortingPaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EditorModule,
    FooterModule,
    HeaderModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
