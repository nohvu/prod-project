import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: 'admin',
    },
})];

export const Error = Template.bind({});
Error.args = {
};
Error.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: 'admin',
        error: 'Ошибка',
    },
})];

export const Loading = Template.bind({});
Loading.args = {
};
Loading.decorators = [StoreDecorator({
    loginForm: {
        isLoading: true,
    },
})];