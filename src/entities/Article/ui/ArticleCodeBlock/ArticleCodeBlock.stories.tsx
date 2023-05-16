import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleBlockType } from 'entities/Article/model/types/article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleCodeBlock } from './ArticleCodeBlock';

export default {
    title: 'entities/ArticleCodeBlock',
    component: ArticleCodeBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlock>;

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => <ArticleCodeBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    block: {
        id: '1',
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    block: {
        id: '1',
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
