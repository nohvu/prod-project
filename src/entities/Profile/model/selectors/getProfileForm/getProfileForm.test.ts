import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return profile form', () => {
        const form = {
            firstname: 'Ivan',
            lastname: 'Kochin',
            age: 28,
            username: 'ivkoch2022',
            city: 'Kazan',
            currency: Currency.RUB,
            country: Country.RUSSIA,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
