import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string
}
const reducers: ReducerList = { profile: profileReducer };

const ProfilePage = memo((props: ProfilePageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Profile Page')}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
