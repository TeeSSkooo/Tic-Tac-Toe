import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

import store from 'store';

interface RootState extends ReturnType<typeof store.getState> {}

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
