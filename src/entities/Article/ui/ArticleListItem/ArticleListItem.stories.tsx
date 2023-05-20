import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { article } from 'shared/assets/tests/article';
import { ArticleView } from 'entities/Article';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const Small = Template.bind({});
Small.args = {
    article,
    view: ArticleView.SMALL,
};

export const Big = Template.bind({});
Big.args = {
    article,
    view: ArticleView.BIG,
};
