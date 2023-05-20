import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { ArticleList, ArticleView } from 'entities/Article';
import { article } from 'shared/assets/tests/article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                view={ArticleView.BIG}
                articles={new Array(16)
                    .fill(0)
                    .map((item, index) => ({ ...article, id: String(index) }))}
            />
        </div>
    );
};

export default memo(ArticlesPage);
