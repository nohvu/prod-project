import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '123admin' },
        };
        expect(getLoginState(state as StateSchema)).toEqual({ password: '123admin' });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
