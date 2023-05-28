import { ScrollSafeSchema } from 'features/ScrollSafe';
import { scrollSafeActions, scrollSafeReducer } from './ScrollSafeSlice';

describe('ScrollSafeSlice.test', () => {
    test('test set scroll position', () => {
        const state: DeepPartial<ScrollSafeSchema> = {
            scroll: {},
        };
        expect(scrollSafeReducer(state as ScrollSafeSchema, scrollSafeActions.setScrollPosition({
            path: '/articles',
            position: 900,
        })))
            .toEqual({
                scroll: {
                    '/articles': 900,
                },
            });
    });
});
