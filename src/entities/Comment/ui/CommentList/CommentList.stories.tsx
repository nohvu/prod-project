import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirUwCzxBqjGCeHUVbQBqbF28Ph3i1lKkyMw&usqp=CAU',
            },
            text: 'Hello world',
        },
        {
            id: '2',
            user: {
                id: '2',
                username: 'user',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirUwCzxBqjGCeHUVbQBqbF28Ph3i1lKkyMw&usqp=CAU',
            },
            text: 'Test comment',
        },
    ],
};

export const Empty = Template.bind({});
Empty.args = {};
