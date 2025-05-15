import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { IArticle } from '../../models/article.interface';
import { INewsCategory } from '../../models/news-category.interface';
import { INewsResult } from '../../models/news-result.interface';
import { NewsHttpService } from '../../services/news-http.service';
import { MaterialModule } from '../../shared/material/material.module';
import { NewsCardComponent } from '../news-card/news-card.component';

@Component({
    imports: [
        CommonModule,
        MaterialModule,
        NewsCardComponent,
    ],
    selector: 'app-news-widget',
    standalone: true,
    styleUrl: './news-widget.component.scss',
    templateUrl: './news-widget.component.html',
})
export class NewsWidgetComponent implements OnInit {
    public articles: IArticle[] = [];

    public selectedCategoryId: string = '';

    public readonly categories: INewsCategory[] = [
        { id: '', name: 'All categories' },
        { id: 'business', name: 'Business' },
        { id: 'entertainment', name: 'Entertainment' },
        { id: 'general', name: 'General' },
        { id: 'health', name: 'Health' },
        { id: 'science', name: 'Science' },
        { id: 'sports', name: 'Sports' },
        { id: 'technology', name: 'Technology' },
    ];

    private _newsHttpService: NewsHttpService = inject(NewsHttpService);

    public ngOnInit(): void {
        this.getNews(this.selectedCategoryId);
    }

    public getNews(categoryId: string = ''): void {
        this._newsHttpService.getNews(categoryId).subscribe((data: INewsResult) => this.articles = data.articles);
    }

    public onCategoryChange(event: MatSelectChange): void {
        this.getNews(event.value);
    }
}
