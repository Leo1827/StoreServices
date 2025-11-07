import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpenLoginModal: false,
        isOpenRegisterModal: false,
        isOpenRegisterModalStep2: false,
        isOpenVerifyEmail: false,
        isOpenNotificationMsg: false,
        isOpenSessionModal: false,
        isOpenSessionPasswordModal: false,
        isOpenSessionProfileModal: false,
        isOpenSessionProfile: false,
        isOpenNotificationOops: false,
        isOpenNotificationVerify1: false,
        isOpenSessionRecovery: false,
        isOpenVerifyEmailPassword: false,
        isOpenNotificationRecovery: false,
        data: []
    },
    reducers: {
        openModal: (state, { payload }) => {
            const { modal, data } = payload
            switch (modal) {
                case 'login-modal':
                    state.isOpenLoginModal = true
                    state.data = data
                    break
                case 'register-step1':
                    state.isOpenRegisterModal = true
                    state.data = data
                    break
                case 'register-step2':
                    state.isOpenRegisterModalStep2 = true
                    state.data = data
                    break
                case 'verify-email':
                    state.isOpenVerifyEmail = true
                    state.data = data
                    break
                case 'verify-email-password':
                    state.isOpenVerifyEmailPassword = true
                    state.data = data
                    break
                case 'notification-msg':
                    state.isOpenNotificationMsg = true
                    state.data = data
                    break
                case 'notification-msg-recovery':
                    state.isOpenNotificationRecovery= true
                    state.data = data
                    break
                case 'notification-oops':
                    state.isOpenNotificationOops = true
                    state.data = data
                    break
                case 'notification-verify1':
                    state.isOpenNotificationVerify1 = true
                    state.data = data
                    break
                case 'session-step1':
                    state.isOpenSessionModal = true
                    state.data = data
                    break
                case 'session-step2':
                    state.isOpenSessionPasswordModal = true
                    state.data = data
                    break
                
                case 'sessionProfile-step3':
                    state.isOpenSessionProfile = true
                    state.data = data
                    break
                case 'sessionRecoveryDataEmail':
                    state.isOpenSessionRecovery = true
                    state.data = data
                    break
                default:
                    break;
            }
        },
        closeModal: (state, { payload }) => {
            const { modal, data } = payload
            switch (modal) {
                case 'login-modal':
                    state.isOpenLoginModal = false
                    state.data = data
                    break
                case 'register-step1':
                    state.isOpenRegisterModal = false
                    state.data = data
                    break
                case 'register-step2':
                    state.isOpenRegisterModalStep2 = false
                    state.data = data
                    break
                case 'verify-email':
                    state.isOpenVerifyEmail = false
                    state.data = data
                    break
                case 'verify-email-password':
                    state.isOpenVerifyEmailPassword = false
                    state.data = data
                    break
                case 'notification-msg':
                    state.isOpenNotificationMsg = false
                    state.data = data
                    break
                case 'notification-msg-recovery':
                    state.isOpenNotificationRecovery= false
                    state.data = data
                    break
                case 'notification-oops':
                    state.isOpenNotificationOops = false
                    state.data = data
                    break
                case 'notification-verify1':
                    state.isOpenNotificationVerify1 = false
                    state.data = data
                    break
                case 'session-step1':
                    state.isOpenSessionModal = false
                    state.data = data
                    break
                case 'session-step2':
                    state.isOpenSessionPasswordModal = false
                    state.data = data
                    break
               
                case 'sessionProfile-step3':
                    state.isOpenSessionProfile = false
                    state.data = data
                    break
                case 'sessionRecoveryDataEmail':
                    state.isOpenSessionRecovery = false
                    state.data = data
                    break
                default:
                    break
            }
        },
        closeAllModals: ((state) => {
            state.isOpenLoginModal = false,
            state.isOpenRegisterModal = false,
            state.isOpenRegisterModalStep2 = false,
            state.isOpenVerifyEmail = false,
            state.isOpenNotificationMsg = false,
            state.isOpenNotificationOops = false,
            state.isOpenNotificationVerify1 = false,
            state.isOpenSessionModal = false,
            state.isOpenSessionPasswordModal = false,
            state.isOpenSessionProfile = false,
            state.isOpenSessionRecovery = false,
            state.isOpenVerifyEmailPassword = false,
            state.isOpenNotificationRecovery = false,
            state.data = []
        })
    }
})

export default modalSlice.reducer
export const { openModal, closeModal, closeAllModals } = modalSlice.actions