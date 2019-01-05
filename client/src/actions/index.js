import axios from 'axios'

//Action creator
export const fetchWeeklyData = () => {
    return async function(dispatch, getState) {
        const response = await axios.get('/weekly')

        dispatch({type:"FETCH_WEEKLY_DATA", payload: response.data})
    }
}

export const getWeeklyData = () => {
    return {
        type: "GET_WEEKLY_DATA"
    }
}

export const fetchTopData = () => {
    return async function(dispatch, getState) {
        const response = await axios.get('/top')

        dispatch({type:"FETCH_TOP_DATA", payload: response.data})
    }
}

export const getTopData = () => {
    return {
        type: "GET_TOP_DATA"
    }
}