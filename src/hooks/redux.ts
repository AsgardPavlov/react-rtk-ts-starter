import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';

export const useDispatchTyped = () => useDispatch<AppDispatch>();
export const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector;
