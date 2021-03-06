import {
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS ,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS ,
    USER_DETAILS_FAIL,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS ,
    USER_UPDATE_PROFILE_FAIL,

    USER_LIST_REQUEST ,
    USER_LIST_SUCCESS ,
    USER_LIST_FAIL ,
    USER_LIST_RESET,

    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,

    ADMIN_USER_DETAILS_REQUEST ,
    ADMIN_USER_DETAILS_SUCCESS ,
    ADMIN_USER_DETAILS_FAIL ,

    UPDATE_ADMIN_USER_DETAILS_REQUEST,
    UPDATE_ADMIN_USER_DETAILS_SUCCESS,
    UPDATE_ADMIN_USER_DETAILS_FAIL,
    UPDATE_ADMIN_USER_DETAILS_REST



} from './constants/userConstants.js'

export const userLoginReducer = (state = { user : {} } , action ) =>{
    switch(action.type) {
        case USER_LOGIN_REQUEST: 
       
            return { ...state , loading : true }

        case  USER_LOGIN_SUCCESS : 
            return {loading : false, userInfo : action.payload }
        
        case USER_LOGIN_FAIL : 
            return {  loading : false , error : action.payload } 
        
        case  USER_LOGOUT : 
            return {   } 
        default :
            return state
    }
}

export const userRegisterReducer = (state = {} , action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST : 
            return {  loading : true}
        
        case USER_REGISTER_SUCCESS :
            return {  loading : false , userInfo : action.payload}
        
        case USER_REGISTER_FAIL :
             return {  loading : false , error : action.payload}
        
        default : 
            return state
    }
}

export const userProfileReducer = (state = {user : {}} , action ) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST : 
            return { ...state , loading: true}
        
        case USER_DETAILS_SUCCESS: 
            return {  loading: false , user : action.payload}
        
        case USER_DETAILS_FAIL:
            return {  loading : false , error : action.payload}

        default : 
            return state
    }
}

export const userUpdateProfileReducer = (state = {} , action ) => {
    switch(action.type) {
        case USER_UPDATE_PROFILE_REQUEST : 
            return {  loading: true}
        
        case USER_UPDATE_PROFILE_SUCCESS: 
            return {  loading: false ,
                success:true, 
                userInfo : action.payload}
        
        case USER_UPDATE_PROFILE_FAIL:
            return {  loading : false , error : action.payload}

        default : 
            return state
    }
}

export const getUsersReducer = (state = {users : []} , action ) => {
    switch(action.type) {
        case USER_LIST_REQUEST : 
            return {  loading: true}
        
        case USER_LIST_SUCCESS: 
            return { 
                loading: false ,
             
                users : action.payload}
        
        case USER_LIST_FAIL:
            return {  loading : false , error : action.payload}
        
        case USER_LIST_RESET:
            return {
                users: []
            }
        default : 
            return state
    }
}

export const deleteUserReducer = (state = {} , action ) => {
    switch(action.type) {
        case USER_DELETE_REQUEST : 
            return {  loading: true}
        
        case USER_DELETE_SUCCESS: 
            return { 
                loading: false ,
                success: true
            }
        case USER_DELETE_FAIL:
            return { 
                 loading : false , 
                 error : action.payload
                }
        
       
        default : 
            return state
    }
}

export const AdminUserDetailsReducer = (state = {user : {}} , action ) => {
    switch(action.type) {
        case  ADMIN_USER_DETAILS_REQUEST: 
            return { ...state , loading: true}
        
        case  ADMIN_USER_DETAILS_SUCCESS: 
            return {  loading: false , user : action.payload}
        
        case ADMIN_USER_DETAILS_FAIL:
            return {  loading : false , error : action.payload}

        default : 
            return state
    }
}

export const UpdateAdminUserReducer = (state = {user:{}} , action ) => {
    switch(action.type) {
        case UPDATE_ADMIN_USER_DETAILS_REQUEST: 
            return {  loading: true}
        
        case UPDATE_ADMIN_USER_DETAILS_SUCCESS: 
            return {  loading: false ,
                success:true, 
               }
        
        case UPDATE_ADMIN_USER_DETAILS_FAIL:
            return {  loading : false , error : action.payload}
        
        case UPDATE_ADMIN_USER_DETAILS_REST:
            return {
                user : {}
            }

        default : 
            return state
    }
}