
export const getStudentFirstName = result => {
    console.log("firstname")
    return ({
        type: "GET_STUDENT_FIRST_NAME",
        payload: result
    })
}

export const IS_LOGGED_IN = result => {
    return ({
        type: "IS_LOGGED_IN",
        payload: result
    })
}

export const addEvent = result => {
    return ({
        type: "ADD_EVENT",
        payload: result
    })
}


