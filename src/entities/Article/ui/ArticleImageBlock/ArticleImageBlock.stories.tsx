import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleImageBlock } from './ArticleImageBlock';

export default {
    title: 'entities/Article/ArticleImageBlock',
    component: ArticleImageBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlock>;

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => <ArticleImageBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    block: {
        id: '1',
        type: ArticleBlockType.IMAGE,
        title: 'Image 1',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCxYrYMJc02-Og5F_w2DqaSkKCdVXNrOhVWwkZkis&s',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    block: {
        id: '1',
        type: ArticleBlockType.IMAGE,
        title: 'Image 1',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCxYrYMJc02-Og5F_w2DqaSkKCdVXNrOhVWwkZkis&s',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
