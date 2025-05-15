import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        MatDialogModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule,
    ],
})
export class MaterialModule { }
