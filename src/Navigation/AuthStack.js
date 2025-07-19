import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Container/AuthScreen/Intro/SplashScreen';
import Registration from '../Container/AuthScreen/RegisterScreen';
import SignupScreen from '../Container/AuthScreen/SignUpScreen';
import OTPScreen from '../Container/AuthScreen/OtpScreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="OtpScreen" component={OTPScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
