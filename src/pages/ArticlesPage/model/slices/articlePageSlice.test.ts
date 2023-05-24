import { DeepPartial } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { article } from 'shared/assets/tests/article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { articlePageReducer } from './articlePageSlice';

describe('articlePageSlice.test', () => {
    test('test get articles list service pending', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: false,
        };
        expect(articlePageReducer(state as ArticlesPageSchema, fetchArticlesList.pending)).toEqual({
            isLoading: true,
            error: undefined,
        });
    });
});
