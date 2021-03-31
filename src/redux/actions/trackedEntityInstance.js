import { COVID_VACCINE_PROGRAM } from '../../constant'
import { FETCH_TEIS, RECEIVE_TEIS, FETCH_TEI, RECEIVE_TEI } from '../types'
import { teisQuery, teisFilterQuery } from './query'



const fetchTeis = (engine) => async dispatch => {

    dispatch({
        type: FETCH_TEIS
    })

    const { result } = await engine.query(teisQuery(COVID_VACCINE_PROGRAM))

    dispatch({
        type: RECEIVE_TEIS,
        payload: result
    })

}

const searchTeis = (engine, param) => async dispatch => {

    console.log('Hello')
    dispatch({
        type: FETCH_TEIS
    })

    const { result } = await engine.query(teisFilterQuery(COVID_VACCINE_PROGRAM, param))

    dispatch({
        type: RECEIVE_TEIS,
        payload: result
    })

}


export { fetchTeis, searchTeis }