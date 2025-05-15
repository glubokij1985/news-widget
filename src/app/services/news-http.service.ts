import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { INewsResult } from '../models/news-result.interface';

@Injectable({ providedIn: 'root' })
export class NewsHttpService {
    private _apiUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1ae4c0a13b664743910511d26a5140de';

    constructor(private _http: HttpClient) { }

    public getNews(categoryId: string): Observable<INewsResult> {
        return this._http.get<INewsResult>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=1ae4c0a13b664743910511d26a5140de&category=${categoryId}`).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error('Error:', error);

                return throwError(() => new Error('Could not fetch news'));
            }),
        );
    }
}