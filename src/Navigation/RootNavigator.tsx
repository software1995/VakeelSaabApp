


import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './Routes';
import { navigationRef } from './navigation';
import LawyerListingScreen from '../screens/LawyerListingScreen';
import LawyerProfileScreen from '../screens/LawyerProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import AuthStack from './AuthStack';
import BottomTabStack from './BottomTabStack';
import SplashScreen from '../Container/AuthScreen/Intro/SplashScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={Routes.SPLASH_SCREEN}
        screenOptions={{
          animation: 'slide_from_right',
          gestureEnabled: true,
          navigationBarColor: 'black',
          headerShown: false,
        }}>
        {/* Start with SplashScreen */}
        <Stack.Screen 
          name={Routes.SPLASH_SCREEN} 
          component={SplashScreen} 
        />
        
        {/* Authentication stack */}
        <Stack.Screen 
          name={Routes.AUTHSTACK} 
          component={AuthStack} 
        />
        
        {/* Main app with bottom tabs - includes LawyerListingScreen as Home */}
        <Stack.Screen 
          name={Routes.BOTTOMTABSTACK} 
          component={BottomTabStack} 
        />
        
        {/* Lawyer-related screens accessible from any tab */}
        <Stack.Screen
          name={Routes.LAWYERPROFILE_SCREEN}
          component={LawyerProfileScreen}
        />
        
        <Stack.Screen
          name={Routes.CHAT_SCREEN}
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;