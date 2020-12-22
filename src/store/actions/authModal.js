import { SHOW_MODAL_LOGIN, HIDE_MODAL, SHOW_MODAL_SIGNUP, SET_USER } from './actionTypes'

export const showModalLogin = () => {
    return {
        type: SHOW_MODAL_LOGIN
    }
}

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
}


export const showModalSignup = () => {
    return {
        type: SHOW_MODAL_SIGNUP
    }
}
export const setUser = (payload) => {
    return {
        type : SET_USER,
        payload
    }
}