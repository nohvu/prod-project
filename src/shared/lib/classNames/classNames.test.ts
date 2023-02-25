import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        const expected = 'someClass';
        expect(classNames('someClass')).toBe(expected);
    });
    test('with additional class', () => {
        const expected = 'someClass addClass';
        expect(classNames(
            'someClass',
            {},
            ['addClass'],
        )).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'someClass addClass hovered';
        expect(classNames(
            'someClass',
            { hovered: true },
            ['addClass'],
        )).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass addClass hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['addClass'],
        )).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass addClass hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['addClass'],
        )).toBe(expected);
    });
});
