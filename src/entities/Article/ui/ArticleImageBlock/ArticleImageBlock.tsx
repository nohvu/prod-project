import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Text, TextAlign } from 'shared/ui/Text/Text';
import { IArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
    className?: string,
    block: IArticleImageBlock
}

export const ArticleImageBlock = memo((props: ArticleImageBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
            <img className={cls.img} src={block.src} alt={block.title} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
