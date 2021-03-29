import { combineReducers } from 'redux';
import { fetchTeis } from './trackedEntityInstance'


export default combineReducers({
    tei: fetchTeis
})