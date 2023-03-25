import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, [setIsAuthModal]);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias assumenda\n'
                    + '                culpa deserunt dolorem exercitationem facere facilis fuga incidunt inventore labore\n'
                    + '                laboriosam libero nulla officiis pariatur possimus quaerat sed, voluptas.')}
            </Modal>
        </div>
    );
};
