import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INewsDialogData } from '../../models/news-dialog-data.interface';
import { MaterialModule } from '../../shared/material/material.module';

@Component({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    selector: 'app-news-dialog',
    standalone: true,
    styleUrl: './news-dialog.component.scss',
    templateUrl: './news-dialog.component.html',
})
export class NewsDialogComponent {
    public data: INewsDialogData = inject<INewsDialogData>(MAT_DIALOG_DATA);
}
