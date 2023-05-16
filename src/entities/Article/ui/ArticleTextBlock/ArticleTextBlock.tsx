import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { IArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    className?: string,
    block: IArticleTextBlock
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
    const {
        className,
        block,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
            {block.title && (
                <Text className={cls.title} title={block.title} />
            )}
            {block.paragraphs.map((paragraph, index) => (
                <Text key={paragraph} className={cls.paragraph} text={paragraph} />
            ))}
        </div>
    );
});
