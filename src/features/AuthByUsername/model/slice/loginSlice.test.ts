import { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'admin',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('root'))).toEqual({ username: 'root' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'admin123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('admin'))).toEqual({ password: 'admin' });
    });
});
