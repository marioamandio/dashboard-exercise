import axios from 'axios'

//Weekly Actions
export const fetchWeeklyData = () => {
    return async dispatch => {
        const response = await axios.get('api/weekly')

        dispatch({type:"FETCH_WEEKLY_DATA", payload: response.data})
    }
}

export const getWeeklyData = () => {
    return {
        type: "GET_WEEKLY_DATA"
    }
}


//Top Actions
export const fetchTopData = () => {
    return async dispatch => {
        const response = await axios.get('api/top')

        dispatch({type:"FETCH_TOP_DATA", payload: response.data})
    }
}

export const getTopData = () => {
    return {
        type: "GET_TOP_DATA"
    }
}