import type { StateSchema, ThunkExtraArg, ThunkConfig } from './config/StateSchema';
import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    createReduxStore, StoreProvider, StateSchema, ThunkExtraArg, ThunkConfig,
};
export type { AppDispatch } from './config/store';
