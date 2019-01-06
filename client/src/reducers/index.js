import { combineReducers } from 'redux';


const weeklyData = (state = [], action) => {

    switch(action.type) {
        case 'FETCH_WEEKLY_DATA':
            return action.payload
        
        case 'GET_WEEKLY_DATA':
            return [...state]

        default:
            return state
    }
}

const topData = (state = [], action) => {
    
    switch(action.type) {
        case 'FETCH_TOP_DATA':
            return [...action.payload]
        
        case 'GET_TOP_DATA':
            return [...state]

        default:
            return state
    }
}



export default combineReducers({
    weeklyData: weeklyData,
    topData: topData
});