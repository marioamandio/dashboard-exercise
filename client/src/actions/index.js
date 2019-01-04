import axios from 'axios'

//Action creator
export const getWeeklyData = () => {
    return async function(dispatch, getState) {
        const response = await axios.get('/weekly')

        dispatch({type:"GET_WEEKLY_DATA", payload: response.data})
    }
}

export const getTopData = () => {
    return async function(dispatch, getState) {
        const response = await axios.get('/top')

        dispatch({type:"GET_TOP_DATA", payload: response.data})
    }
}