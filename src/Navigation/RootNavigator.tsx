import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './Routes';
import {navigationRef} from './navigation';
import LawyerListingScreen from '../screens/LawyerListingScreen';
import LawyerProfileScreen from '../screens/LawyerProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import AuthStack from './AuthStack';
import BottomTabStack from './BottomTabStack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  console.log('Routes constants:', Routes);
  
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          gestureEnabled: true,
          navigationBarColor: 'white',
        }}>
        <Stack.Screen
          name={Routes.LAWYERlIST_SCREEN}
          component={LawyerListingScreen}
          options={{headerShown: false, navigationBarHidden: true}}
        />

        <Stack.Screen
          name={Routes.LAWYERPROFILE_SCREEN}
          component={LawyerProfileScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Routes.CHAT_SCREEN}
          component={ChatScreen}
          options={{headerShown: false}}
        />

         <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown: false}}/>
        <Stack.Screen name="BottomTabStack" component={BottomTabStack}options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
