import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export enum ValidateProfileError {
    NO_DATA = 'No data',
    INCORRECT_USER_DATA = 'Incorrect user data',
    INCORRECT_AGE = 'Incorrect age',
    INCORRECT_COUNTRY = 'Incorrect country',
    SERVER_ERROR = 'Server error'
}

export interface Profile {
    firstname?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    validateErrors?: ValidateProfileError[]
}
