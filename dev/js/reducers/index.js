import {combineReducers} from 'redux';
import test from './test';
import questions from './questions';

const allReducers = combineReducers({
    questions,
    test
});

export default allReducers
