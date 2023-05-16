import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Code } from 'shared/ui/Code/Code';
import { IArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
    className?: string,
    block: IArticleCodeBlock
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
    const {
        className,
        block,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
            <Code code={block.code} />
        </div>
    );
});
