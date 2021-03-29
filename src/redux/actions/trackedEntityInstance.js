import { FETCH_TEIS, RECEIVE_TEIS, FETCH_TEI, RECEIVE_TEI } from '../types'
import { teisQuery, teiQuery } from './query'

const fetchTeis = (engine, program) => async dispatch => {


    dispatch({
        type: FETCH_TEIS
    })

    const { result } = await engine.query(teisQuery(program))

    dispatch({
        type: RECEIVE_TEIS,
        payload: result
    })

}


export { fetchTeis }