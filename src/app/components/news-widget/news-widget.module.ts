import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsWidgetComponent } from './news-widget.component';

@NgModule({
    imports: [
        CommonModule,
        NewsWidgetComponent,
    ],
    exports: [NewsWidgetComponent],
})
export class NewsWidgetModule { }
