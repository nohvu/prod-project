import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import { getArticlesPageView, getArticlesPageIsLoading, getArticlesPageError } from './articlesPageSelectors';

describe('getArticlesPageView.test', () => {
    test('should return articles view', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
                view: ArticleView.SMALL,
                ids: [],
                entities: {},
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.SMALL);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getArticlesPageView(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticlesPageIsLoading.test', () => {
    test('should return articles loading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
                view: ArticleView.SMALL,
                ids: [],
                entities: {},
            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticlesPageError.test', () => {
    test('should return articles error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
                view: ArticleView.SMALL,
                ids: [],
                entities: {},
                error: 'error',
            },
        };
        expect(getArticlesPageError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
    });
});
