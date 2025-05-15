import { IArticle } from './article.interface';

export interface INewsResult {
    articles: IArticle[];
    status: string;
    totalResults: number;
}