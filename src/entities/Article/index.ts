import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from './model/selectors/articleDetails';
