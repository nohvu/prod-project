import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId.ts/fetchCommentsByArticleId';
import { articleDetailsCommentReducer } from './articleDetailsCommentSlice';

describe('articleDetailsCommentSlice.test', () => {
    test('test get article comments service pending', () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            isLoading: false,
        };
        expect(articleDetailsCommentReducer(state as ArticleDetailsCommentSchema, fetchCommentsByArticleId.pending)).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test get article comments service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            isLoading: true,
        };
        const comments: Comment[] = [{
            id: '1',
            user: { id: '1', username: 'admin' },
            text: 'Hello',
        }];
        expect(articleDetailsCommentReducer(state as ArticleDetailsCommentSchema, fetchCommentsByArticleId.fulfilled(comments, '1', '')))
            .toEqual({
                isLoading: false,
                ids: ['1'],
                entities: {
                    1: {
                        id: '1',
                        user: { id: '1', username: 'admin' },
                        text: 'Hello',
                    },
                },
            });
    });
});
