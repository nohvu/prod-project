import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from 'shared/assets/tests/article';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
    articleDetailsComments: {
        ids: ['1'],
        entities: {
            1: {
                id: '1',
                user: {
                    id: '1',
                    username: 'user',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirUwCzxBqjGCeHUVbQBqbF28Ph3i1lKkyMw&usqp=CAU',
                },
                text: 'Hello',
            },
        },
    },
})];
