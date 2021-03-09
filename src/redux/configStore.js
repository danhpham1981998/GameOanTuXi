import {combineReducers, createStore} from 'redux';
import baiTapOanTuTiReDucer from './reducer/baiTapOanTuTiReducer';
import xucXacReducer from './reducer/xucXacReducer';
import baiTapOanTuTiReducer from './reducer/baiTapOanTuTiReducer';

const rootReducer = combineReducers ({
    reducer : xucXacReducer,
    baiTapOanTuTiReducer
});

export const store = createStore(rootReducer);
