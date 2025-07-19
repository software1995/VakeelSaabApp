import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { persistor, RootState } from "../redux/store";
import { Routes } from "../navigation/Routes";
import { logout } from "../redux/slices/userBundleSlice";


const useLogout = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { userData, deviceId, refreshToken } = useSelector((state: RootState) => state.userBundleSlice);


    const clearLocalData = async (shouldNavigate: boolean) => {
        // dispatch(logout());
        // dispatch(clearSelectedAddress());
        // dispatch(clearDeliveryData());
        // dispatch(clearCart());
        // dispatch({ type: 'LOGOUT' });
        // await persistor.purge();

        await AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'userData', 'deviceId']);
        if (shouldNavigate) {
            navigation.reset({
                index: 0,
                routes: [{ name: Routes.LOGIN_SCREEN }],
            });
        }
    };


    // const handleLogout = async (shouldCallApi: boolean = false, shouldNavigate: boolean = true) => {
    //     try {
    //         if (shouldCallApi) {
    //             const payload: any = {
    //                 "userId": userData?.userId,
    //                 "deviceid": deviceId,
    //                 "refreshToken": refreshToken
    //             };

    //             const response = await postRequest(BaseSetting.endpoints.logout, payload);

    //             if (response.data?.status === 200 || response?.data?.code === 200) {
    //                 await clearLocalData(shouldNavigate);
    //                 showMessage({
    //                     message: "Success",
    //                     description: response?.data?.message || 'Logout Successfully',
    //                     type: "success",
    //                 });
    //             }
    //             else {
    //                 showMessage({
    //                     message: "Error",
    //                     description: response?.data?.message || 'Something went wrong',
    //                     type: "danger",
    //                 });
    //             }
    //         } else {
    //             await clearLocalData(shouldNavigate);
    //         }



    //     } catch (error) {
    //         console.error('Error during logout:', error);
    //     }
    // };

    // return handleLogout;
};

export default useLogout;
