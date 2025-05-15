import { Component, OnInit } from '@angular/core';
import { NewsWidgetComponent } from './components/news-widget/news-widget.component';

@Component({
    imports: [NewsWidgetComponent],
    selector: 'app-root',
    standalone: true,
    styleUrl: './app.component.scss',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    public title: string = 'news-widget';

    public ngOnInit(): void {
        this._loadRemoteNewsWidgetFonts();
    }

    private _loadRemoteNewsWidgetFonts(): void {
        const fontLink = document.createElement('link');

        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap';
        document.head.appendChild(fontLink);
    }
}
