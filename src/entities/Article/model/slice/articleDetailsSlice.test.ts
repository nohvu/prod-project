import { article } from 'shared/assets/tests/article';
import { Article, ArticleDetailsSchema } from 'entities/Article';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsSlice.test', () => {
    test('test get article service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test get article service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(article as Article, '1', '')))
            .toEqual({
                isLoading: false,
                data: article,
            });
    });
});
