import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    const increment = () => {
        dispatch(counterActions.increment());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={decrement}
                data-testid="decrement-btn"
            >
                {t('Уменьшить')}
            </Button>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('Увеличить')}
            </Button>
        </div>
    );
};
