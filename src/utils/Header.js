import {
  Image,
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

const Header = ({HeaderTxt, onPress}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.headersty}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrowsty}>
          <Icon name="left" size={20} color="#242424" style={styles.icon} />
        </TouchableOpacity>
        <View style={{marginTop: RfH(18)}}>
          <Text style={styles.txtsty}>{HeaderTxt}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Header;

const styles = StyleSheet.create({
  headertxt: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#242424',
    bottom: RfH(3),
  },
  arrowsty: {top: RfH(25), left: RfW(15), position: 'absolute'},
  txtsty: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#242424',
  },
  headersty: {
    paddingBottom: RfH(5),
    paddingHorizontal: RfW(5),
  },
  icon: {
    bottom: RfH(0),
  },
});
