import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirUwCzxBqjGCeHUVbQBqbF28Ph3i1lKkyMw&usqp=CAU',
        },
        text: 'Hello world',
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
