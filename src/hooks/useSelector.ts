import {TypedUseSelectorHook, useSelector as useReduxSelector} from 'react-redux';
import {RootState} from '../store/store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
