// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import AuthStack from './src/Navigation/AuthStack';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import BottomTabStack from './src/Navigation/BottomTabStack';
// import {useTranslation, initReactI18next} from 'react-i18next';
// import i18n from 'i18next';
// import * as RNLocalize from 'react-native-localize';
// import en from './src/localization/en.json';
// import hi from './src/localization/hi.json';
// import {useEffect, useState} from 'react';
// import {AppState} from 'react-native';

// const Stack = createNativeStackNavigator();

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {translation: en},
//     hi: {translation: hi},
//   },
//   fallbackLng: 'en',
//   interpolation: {
//     escapeValue: false,
//   },
// });

// function App() {
//   const [appState, setAppState] = useState(AppState.currentState);
//   const [isEventListenerActive, setIsEventListenerActive] = useState(true);

//   useEffect(() => {
//     const detectLanguage = () => {
//       const locales = RNLocalize.getLocales();
//       if (locales.length > 0) {
//         const deviceLanguage = locales[0].languageCode;
//         i18n.changeLanguage(deviceLanguage);
//       }
//     };

//     detectLanguage();

//     const handleAppStateChange = (nextAppState:any) => {
//       if (appState.match(/inactive|background/) && nextAppState === 'active') {
//         detectLanguage();
//       }
//       setAppState(nextAppState);
//     };

//     const subscription = AppState.addEventListener(
//       'change',
//       handleAppStateChange,
//     );

//     return () => {
//       if (isEventListenerActive) {
//         subscription.remove();
//         setIsEventListenerActive(false);
//       }
//     };
//   }, [appState, isEventListenerActive]);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="AuthStack" component={AuthStack} />
//         <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import AuthStack from './src/Navigation/AuthStack';
// import BottomTabStack from './src/Navigation/BottomTabStack';

// // Import i18n setup once to initialize localization
// // import './src/localization/i18n';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="AuthStack" component={AuthStack} />
//         <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;



import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './src/Navigation/AuthStack';
import BottomTabStack from './src/Navigation/BottomTabStack';
import { StatusBar } from 'react-native';
import RootNavigator from './src/Navigation/RootNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
         < GestureHandlerRootView>
           <StatusBar barStyle={'light-content'} backgroundColor='#2196F3' />
            <RootNavigator />
         </GestureHandlerRootView>
    </>
  );
}

export default App;