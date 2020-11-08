import { SHOW_MODAL_LOGIN, HIDE_MODAL, SHOW_MODAL_SIGNUP } from './actionTypes'

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
