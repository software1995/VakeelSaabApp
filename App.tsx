import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import RootNavigator from './src/Navigation/RootNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function App() {
  return (
    <>
         < GestureHandlerRootView>
           <StatusBar barStyle={'light-content'} backgroundColor='red' />
            <RootNavigator />
         </GestureHandlerRootView>
    </>
  );
}

export default App;