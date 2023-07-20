export const LoginStart = (userCrendentials) =>({
    type:"LOGIN_START",
    
})


export const LoginSuccess = (user) =>({
    type:"LOGIN_SUCCESS",
    payload :user,
})

export const LoginFailure = () =>({
    type: "LOGIN_FAILURE"
})
export const UpdateStart = (userCrendentials) =>({
    type:"UPDATE_START", 
})


export const UpdateSuccess = (user) =>({
    type:"UPDATE_SUCCESS",
    payload :user,
})

export const UpdateFailure = () =>({
    type: "UPDATE_FAILURE"})

export const Logout= () =>({
    type:"LOGOUT"
    
})