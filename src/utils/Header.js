// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import {RfH, RfW} from './helper';
// import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/AntDesign';

// // Add a showBackButton prop that defaults to true
// const Header = ({HeaderTxt, onPress, showBackButton = true}) => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.headerContainer}>
//         {/* Conditionally render the back button */}
//         {showBackButton ? (
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             style={styles.backButton}>
//             <Icon name="left" size={20} color="#000000" style={styles.icon} />
//           </TouchableOpacity>
//         ) : (
//           // Empty view for spacing when back button is hidden
//           <View style={styles.emptyBackButton} />
//         )}
        
//         <View style={styles.titleContainer}>
//           <Text style={styles.headerTitle}>{HeaderTxt}</Text>
//         </View>
        
//         {/* Empty placeholder for spacing */}
//         <View style={styles.rightPlaceholder} />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   safeArea: {
//     backgroundColor: '#ffffff',
//   },
//   headerContainer: {
//     backgroundColor: '#ffffff',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: RfH(15),
//     paddingHorizontal: RfW(15),
//     height: RfH(60),
//   },
//   backButton: {
//     width: RfW(40),
//     height: RfH(40),
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   // Empty view with same dimensions as back button
//   emptyBackButton: {
//     width: RfW(40),
//     height: RfH(40),
//   },
//   titleContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '500',
//     color: '#000000',
//     textAlign: 'center',
//   },
//   icon: {
//     // No additional styling needed
//   },
//   rightPlaceholder: {
//     width: RfW(40),
//     height: RfH(40),
//   },
// });


import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RfH, RfW} from './helper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

// Updated Header with blue background, status indicator and rightComponent
const Header = ({
  HeaderTxt, 
  onPress, 
  showBackButton = true, 
  showStatus = false,
  statusColor = '#4CAF50',
  rightComponent = null
}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        {/* Conditionally render the back button */}
        {showBackButton ? (
          <TouchableOpacity
            onPress={onPress || (() => navigation.goBack())}
            style={styles.backButton}>
            <Icon name="left" size={20} color="#000000" style={styles.icon} />
          </TouchableOpacity>
        ) : (
          // Empty view for spacing when back button is hidden
          <View style={styles.emptyBackButton} />
        )}
        
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>{HeaderTxt}</Text>
          {showStatus && (
            <View style={styles.statusDot} backgroundColor={statusColor} />
          )}
        </View>
        
        {/* Right component or empty placeholder */}
        {rightComponent ? (
          rightComponent
        ) : (
          <View style={styles.rightPlaceholder} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    backgroundColor: '#ffffff', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: RfH(15),
    paddingHorizontal: RfW(15),
    height: RfH(60),
  },
  backButton: {
    width: RfW(40),
    height: RfH(40),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  // Empty view with same dimensions as back button
  emptyBackButton: {
    width: RfW(40),
    height: RfH(40),
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000', // White text
    textAlign: 'center',
  },
  icon: {
    // No additional styling needed
  },
  rightPlaceholder: {
    width: RfW(40),
    height: RfH(40),
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
});