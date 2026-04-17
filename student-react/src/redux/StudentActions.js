import api from "../api/StudentApi"

export const getAllStudents = () => {

    return async(dispatch) => {
        dispatch ({
            type:"Loading"
        })
        try {
            const res = await api.get("");
           
            dispatch({
                type:"GetAllStudents",
                payload:res.data
            })
        } catch(error)
         {
            dispatch({
                type:"Error",
                payload:error.message
            })
        }
    }
}



 export const getStudentById =(id) => {
    return async (dispatch) => {
        dispatch({type:"Loading"})
        try {
            const res = await api.get(`/${id}`)
            dispatch({
                type:"GetStudentById",
                payload:res.data
            })
        } catch (error) {
            dispatch({
                type:"Error",
                payload:error.message
            })
            
        }
    }
}


export const addStudent =(student) => {
    return async (dispatch) => {
        dispatch({type:"Loading"})
        try {
            const res = await api.post("",student)
            dispatch({
                type:"AddStudent",
                payload:res.data
            })
        } catch (error) {
            dispatch({
                type:"Error",
                payload:error.message
            })
            
        }
    }
}



