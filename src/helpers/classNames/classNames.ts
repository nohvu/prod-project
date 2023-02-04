type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, add: string[]): string {
    return [
        cls,
        ...add,
        ...Object.entries(mods).filter(([_, value]) => value === true).map(([className, _]) => className)
    ].join(' ');
}