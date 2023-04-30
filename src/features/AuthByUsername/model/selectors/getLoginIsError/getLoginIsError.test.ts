import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsError } from './getLoginIsError';

describe('getLoginIsError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginIsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getLoginIsError(state as StateSchema)).toEqual(undefined);
    });
});
