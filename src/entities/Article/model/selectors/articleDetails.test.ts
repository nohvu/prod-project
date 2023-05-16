import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { article } from 'shared/assets/tests/article';

import { Article } from 'entities/Article';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('getArticleDetailsData.test', () => {
    test('should return details data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: article as Article,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading.test', () => {
    test('should return article loading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsError.test', () => {
    test('should return article error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
