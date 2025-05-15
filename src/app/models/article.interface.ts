import { IArticleSource } from './article-source.interface';

export interface IArticle {
    author?: string;
    content?: string;
    description?: string;
    publishedAt?: string;
    source?: IArticleSource;
    title?: string;
    url?: string;
    urlToImage?: string;
}