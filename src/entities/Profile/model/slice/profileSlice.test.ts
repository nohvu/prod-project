import { ProfileSchema, updateProfileData, ValidateProfileError } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    firstname: 'Ivan',
    lastname: 'Kochin',
    age: 28,
    username: 'ivkoch2022',
    city: 'Kazan',
    currency: Currency.RUB,
    country: Country.RUSSIA,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true });
    });

    test('test cancel editing', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
            data,
            form: { username: '' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: 'Ivan' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'John' }))).toEqual({
            form: { username: 'John' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.NO_DATA],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
});
