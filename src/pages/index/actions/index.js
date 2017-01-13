import {
    LOAD_INFO
} from '../../../constants/actions/actionType.js'

export const trackLog = (log) => {
    return dispatch => {
        console.log(log)
    }
}

export const testT1 = (log) => {
    return dispatch => {
        dispatch(trackLog(log))
        dispatch({
            type: LOAD_INFO,
            payload: { log }
        })
    }
}
