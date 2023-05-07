import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';

import TestAvatar from './images.png';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: TestAvatar,
    alt: 'Avatar',
};
export const Dark = Template.bind({});
Dark.args = {
    src: TestAvatar,
    alt: 'Avatar',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Small = Template.bind({});
Small.args = {
    src: TestAvatar,
    alt: 'Avatar',
    size: 50,
};

export const Alt = Template.bind({});
Alt.args = {
    alt: 'Avatar',
};
