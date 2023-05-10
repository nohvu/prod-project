import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import TestAvatar from 'shared/assets/tests/images.png';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args: any) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            firstname: 'Ivan',
            lastname: 'Kochin',
            age: 28,
            username: 'ivkoch2022',
            city: 'Kazan',
            avatar: TestAvatar,
            currency: Currency.RUB,
            country: Country.RUSSIA,
        },
    },
})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            firstname: 'Ivan',
            lastname: 'Kochin',
            age: 28,
            username: 'ivkoch2022',
            city: 'Kazan',
            avatar: TestAvatar,
            currency: Currency.RUB,
            country: Country.RUSSIA,
        },
    },
})];
