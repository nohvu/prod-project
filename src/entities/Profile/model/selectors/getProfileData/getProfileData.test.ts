import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return profile data', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
