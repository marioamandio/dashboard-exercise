import { combineReducers } from 'redux';
// import weeklyData from './weeklyData';


const weeklyData = (state = [], action) => {
    if(action.type === 'GET_WEEKLY_DATA') {
        return [...action.payload]
    }
    return state
}

const topData = (state = [], action) => {
    if(action.type === 'GET_TOP_DATA') {
        return [...action.payload]
    }

    return state
}



export default combineReducers({
    weeklyData: weeklyData,
    topData: topData
});