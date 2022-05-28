import {useDispatch as useReduxDispatch} from 'react-redux';
import {AppDispatch} from '../store/store';

export const useDispatch = () => useReduxDispatch<AppDispatch>();
