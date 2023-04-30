export type Mods = Record<string, boolean | string | undefined>

export function classNames(
    cls: string,
    mods: Mods = {},
    add: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...add.filter(Boolean),
        ...Object.entries(mods).filter(([_, value]) => value === true)
            .map(([className, _]) => className),
    ].join(' ');
}
