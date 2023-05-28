import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollPosition, getScrollByPath } from './scrollSafeSelector';

describe('getScrollPosition.test', () => {
    test('should return position object', () => {
        const state: DeepPartial<StateSchema> = {
            scrollSafe: {
                scroll: {
                    '/articles': 900,
                },
            },
        };
        expect(getScrollPosition(state as StateSchema)).toEqual({
            '/articles': 900,
        });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getScrollPosition(state as StateSchema)).toEqual(undefined);
    });
});

describe('getScrollByPath.test', () => {
    test('should return position by path', () => {
        const state: DeepPartial<StateSchema> = {
            scrollSafe: {
                scroll: {
                    '/articles': 900,
                },
            },
        };
        expect(getScrollByPath(state as StateSchema, '/articles')).toEqual(900);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            scrollSafe: {},
        };
        expect(getScrollByPath(state as StateSchema, '')).toEqual(0);
    });
});
