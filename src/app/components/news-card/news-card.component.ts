import { CommonModule } from '@angular/common';
import { Component, inject, input, Signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IArticle } from '../../models/article.interface';
import { MaterialModule } from '../../shared/material/material.module';
import { NewsDialogComponent } from '../news-dialog/news-dialog.component';

@Component({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    selector: 'app-news-card',
    standalone: true,
    styleUrl: './news-card.component.scss',
    templateUrl: './news-card.component.html',
})
export class NewsCardComponent {
    public readonly article: Signal<IArticle> = input<IArticle>();

    private readonly _dialog: MatDialog = inject(MatDialog);

    public openNews(): void {
        this._dialog.open(NewsDialogComponent, {
            data: {
                description: this.article().description,
                title: this.article().title,
            },
        });
    }
}
