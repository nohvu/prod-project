import React, {
    ReactElement,
    useEffect,
} from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}
export type ReducersListEntry = [StateSchemaKey, Reducer];
interface DynamicModuleLoaderProps {
    children: ReactElement,
    reducers: ReducerList,
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props): ReactElement => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        children
    );
};
