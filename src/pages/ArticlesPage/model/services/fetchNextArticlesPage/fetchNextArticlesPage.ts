import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNumber,
} from '../../selectors/articlesPageSelectors';

export const fetchNextArticlesPage = createAsyncThunk<void, void,
    ThunkConfig<string>>(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkAPI) => {
            const { dispatch, getState } = thunkAPI;
            const hasMore = getArticlesPageHasMore(getState());
            const page = getArticlesPageNumber(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlePageActions.setPage(page + 1));
                dispatch(fetchArticlesList({ page: page + 1 }));
            }
        },
    );
