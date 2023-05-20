import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from 'shared/assets/tests/article';
import { ArticleView } from 'entities/Article';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Small = Template.bind({});
Small.args = {};
Small.decorators = [StoreDecorator({
    articlesPage: {
        entities: {
            1: {
                ...article,
            },
            2: {
                ...article,
            },
        },
        view: ArticleView.SMALL,
        ids: ['1', '2'],
    },

})];

export const SmallIsLoading = Template.bind({});
SmallIsLoading.args = {};
SmallIsLoading.decorators = [StoreDecorator({
    articlesPage: {
        entities: {
            1: {
                ...article,
            },
            2: {
                ...article,
            },
        },
        view: ArticleView.SMALL,
        ids: ['1', '2'],
        isLoading: true,
    },

})];

export const Big = Template.bind({});
Big.args = {};
Big.decorators = [StoreDecorator({
    articlesPage: {
        entities: {
            1: {
                ...article,
            },
            2: {
                ...article,
            },
        },
        view: ArticleView.BIG,
        ids: ['1', '2'],
    },
})];
export const BigIsLoading = Template.bind({});
BigIsLoading.args = {};
BigIsLoading.decorators = [StoreDecorator({
    articlesPage: {
        entities: {
            1: {
                ...article,
            },
            2: {
                ...article,
            },
        },
        view: ArticleView.BIG,
        ids: ['1', '2'],
        isLoading: true,
    },
})];
