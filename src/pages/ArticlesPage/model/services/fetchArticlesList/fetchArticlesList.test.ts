import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Article } from 'entities/Article';
import { article } from 'shared/assets/tests/article';
import { fetchArticlesList } from './fetchArticlesList';

describe('fetchArticlesList.test', () => {
    test('success', async () => {
        const data: Article[] = [article];
        const thunk = new TestAsyncThunk(fetchArticlesList);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
