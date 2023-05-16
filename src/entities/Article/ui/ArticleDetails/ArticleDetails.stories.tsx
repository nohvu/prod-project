import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from 'shared/assets/tests/article';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];

export const Loading = Template.bind({});
Loading.args = {
};
Loading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {
};
Error.decorators = [StoreDecorator({
    articleDetails: {
        error: 'Error',
    },
})];