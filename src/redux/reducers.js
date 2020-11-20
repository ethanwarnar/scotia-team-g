import { isStudent, isProfessional } from './actions.js'
import { REHYDRATE } from 'redux-persist'


const initialState = {
    isLoggedIn: false,
    student: {
        firstName: '',
    },
    eventArray: {
        array: []
    },
    calendarArray: {
        array: []
    }
}

function addNewEvent(array, event) {
    // console.log(event)
    array.push(event)
    // console.log(array)
    return array
}

function parseEvent(event) {
    var obj = {
        title: "",
        date: ""
    }
    obj.title = event.name

    var msec = Date.parse(event.date);
    var d = new Date(msec);
    obj.date = d.toISOString().slice(0, 10)
    return obj
}

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_LOGGED_IN': {
            return {
                ...state,
                isLoggedIn: action.payload,
            }
        }
        case 'GET_STUDENT_FIRST_NAME': {
            return {
                ...state,
                student: {
                    ...state.student,
                    firstName: action.payload
                }
            }
        }
        case 'ADD_EVENT': {

            var calendarObj = parseEvent(action.payload);

            return {
                ...state,
                eventArray: {
                    array: state.eventArray.array.concat(action.payload)
                },
                calendarArray: {
                    array: state.calendarArray.array.concat(calendarObj)
                }
            }
        }
        default:
            return state
    }
}

export default dashboard