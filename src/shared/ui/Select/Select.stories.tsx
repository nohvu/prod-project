import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

import TestAvatar from './images.png';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Выбрать',
    options: [
        {
            value: '1',
            content: 'Один',
        },
        {
            value: '2',
            content: 'Два',
        },
        {
            value: '3',
            content: 'Три',
        },
    ],
};
export const Dark = Template.bind({});
Dark.args = {
    label: 'Выбрать',
    options: [
        {
            value: '1',
            content: 'Один',
        },
        {
            value: '2',
            content: 'Два',
        },
        {
            value: '3',
            content: 'Три',
        },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
