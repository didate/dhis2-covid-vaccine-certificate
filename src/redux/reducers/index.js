import { combineReducers } from 'redux';
import { fetchTeis, fetchTei } from './trackedEntityInstance'


export default combineReducers({
    teis: fetchTeis
})