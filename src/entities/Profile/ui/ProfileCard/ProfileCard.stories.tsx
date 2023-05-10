import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
import TestAvatar from '../../../../shared/assets/tests/images.png';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        firstname: 'Ivan',
        lastname: 'Kochin',
        age: 28,
        username: 'ivkoch2022',
        city: 'Kazan',
        avatar: TestAvatar,
        currency: Currency.RUB,
        country: Country.RUSSIA,
    },
};

export const Error = Template.bind({});
Error.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
