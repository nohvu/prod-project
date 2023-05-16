import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string,
    code: string
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        code,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {code}
            </code>
        </pre>
    );
});
