import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'; // Only using one icon library
import ChatScreen from '../Container/ChatScreen';
import Home from '../Container/HomeScreen/Home';
import MenuScreen from '../Container/Menu';
import SearchScreen from '../Container/SearchScreen';
import PostScreen from '../Container/PostScreen';
import {colors} from '../utils';
import {RfH} from '../utils/helper';
import LawyerListingScreen from '../screens/LawyerListingScreen';

const Tab = createBottomTabNavigator();

function BottomTabStack() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'SearchScreen':
              iconName = 'staro';
              break;
            case 'ChatScreen':
              iconName = 'message1';
              break;
            case 'MenuScreen':
              iconName = 'bars';
              break;
            case 'PostScreen':
              iconName = 'codepen-circle';
              break;
            default:
              iconName = 'questioncircleo';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {backgroundColor: '#fff', height: RfH(55)},
      })}>
      <Tab.Screen
        name="Home"
        // component={Home}
        component={LawyerListingScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Skills',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PostScreen"
        options={{
          tabBarLabel: 'Project',
          headerShown: false,
        }}>
        {() => <PostScreen toggleBottomNavigationView={toggleBottomSheet} />}
      </Tab.Screen>
      {/* If you need ChatScreen, uncomment this */}
      {/* <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabStack;
