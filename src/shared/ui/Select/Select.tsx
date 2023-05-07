import React, { useMemo, memo, ChangeEvent } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption {
    value: string,
    content: string
}
interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOption[],
    value?: string,
    readonly?: boolean,
    onChange?: (value: string) => void
}
export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;

    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
