import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewsWidgetModule } from './news-widget/news-widget.module';

@NgModule({
    imports: [
        AppComponent,
        BrowserModule,
        NewsWidgetModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
