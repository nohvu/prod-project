import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias assumenda culpa deserunt dolorem exercitationem facere facilis fuga incidunt inventore labore laboriosam libero nulla officiis pariatur possimus quaerat sed, voluptas.',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias assumenda culpa deserunt dolorem exercitationem facere facilis fuga incidunt inventore labore laboriosam libero nulla officiis pariatur possimus quaerat sed, voluptas.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
