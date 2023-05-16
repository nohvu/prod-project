import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleBlockType } from 'entities/Article/model/types/article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleTextBlock } from './ArticleTextBlock';

export default {
    title: 'entities/ArticleTextBlock',
    component: ArticleTextBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlock>;

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => <ArticleTextBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    block: {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Article',
        paragraphs: ['P1', 'P2'],
    },
};

export const Dark = Template.bind({});
Dark.args = {
    block: {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Article',
        paragraphs: ['P1', 'P2'],
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
