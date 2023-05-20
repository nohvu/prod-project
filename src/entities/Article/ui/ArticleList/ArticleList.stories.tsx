import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { article } from 'shared/assets/tests/article';
import { ArticleView } from '../../model/types/article';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const Small = Template.bind({});
Small.args = {
    articles: new Array(9).fill(0).map(() => article),
    view: ArticleView.SMALL,
};
export const SmallLoading = Template.bind({});
SmallLoading.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.SMALL,
};
export const Big = Template.bind({});
Big.args = {
    articles: new Array(3).fill(0).map(() => article),
    view: ArticleView.BIG,
};

export const BigLoading = Template.bind({});
BigLoading.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.BIG,
};
