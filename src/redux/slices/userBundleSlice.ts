import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userBundleSlice {
    accessToken?: string | null;
    refreshToken?: string | null;
    userData?: any;
    deviceId?: string | null;
    skipLogin?: boolean;
    tokenType?: any | null;
    action?: any | null;
}

const initialState: userBundleSlice = {
    accessToken: null,
    refreshToken: null,
    userData: null,
    deviceId: null,
    skipLogin: false,
    tokenType: null,
    action: null,
};

export const userBundleSlice = createSlice({
    name: 'userBundleSlice',
    initialState,
    reducers: {
        setLoginData: (
            state,
            action: PayloadAction<Partial<userBundleSlice>>
        ) => {
            if (action.payload.accessToken !== undefined) {
                state.accessToken = action.payload.accessToken;
            }
            if (action.payload.refreshToken !== undefined) {
                state.refreshToken = action.payload.refreshToken;
            }
            if (action.payload.userData !== undefined) {
                state.userData = action.payload.userData;
            }
            if (action.payload.deviceId !== undefined) {
                state.deviceId = action.payload.deviceId;
            }
            if (action.payload.skipLogin !== undefined) {
                state.skipLogin = action.payload.skipLogin;
            }
        },
        setNoAuthTokenValidateToken: (
            state,
            action: PayloadAction<Partial<userBundleSlice>>
        ) => {
            Object.assign(state, action.payload);
        },
        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.userData = null;
            state.deviceId = null;
            // state.skipLogin = false;
            state.tokenType = null;
            state.action = null;
        },
        updateUserData: (state, action: PayloadAction<any>) => {
            state.userData = {
                ...state.userData,
                ...action.payload,
            };
        },
        setSkipLogin: (state, action: PayloadAction<boolean>) => {
            state.skipLogin = action.payload;
        },
    },
});

export const {
    setLoginData,
    setNoAuthTokenValidateToken,
    logout,
    updateUserData,
    setSkipLogin,
} = userBundleSlice.actions;

export default userBundleSlice.reducer;
