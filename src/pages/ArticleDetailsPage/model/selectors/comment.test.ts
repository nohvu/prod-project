import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsIsLoading, getArticleCommentsError } from './comment';

describe('getArticleCommentsIsLoading.test', () => {
    test('should return comment loading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true,
                ids: [],
                entities: {},
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleCommentsError.test', () => {
    test('should return comment error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: 'error',
                ids: [],
                entities: {},
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
