import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
// import Header from '../../utils/Header';
import {RfH, RfW} from '../../../utils/helper';
import Icon from 'react-native-vector-icons/FontAwesome';
const Post = ({name, Day, Massage, ProfileImage}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.homecontainer}>
          <View style={styles.massagepostcontainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.postcontainer}>
                <View style={styles.imgcontainer}>
                  <Image
                    source={ProfileImage}
                    style={{
                      height: RfH(19),
                      width: RfW(17),
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.namesty}>{name}</Text>
                  <Text style={styles.timesty}>{Day}</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                {/* <TouchableOpacity
                  style={styles.followbtn}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.linkedin.com/in/sanjay-kumar-2a756916a/',
                    )
                  }>
                  <Text style={styles.followtxt}>linkedin</Text>
                </TouchableOpacity> */}

                <View style={styles.followcontainer}>
                  <TouchableOpacity
                    style={styles.followbtn}
                    onPress={() =>
                      Linking.openURL(
                        'https://www.linkedin.com/in/sanjay-kumar-2a756916a/',
                      )
                    }
                    activeOpacity={0.7}>
                    <Icon name="linkedin" size={22} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.msgtextsty}>{Massage}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.WHITE,
    // justifyContent: 'center',
  },
  homecontainer: {
    // paddingHorizontal: RfW(20),
    // marginTop: RfH(30),
  },
  imgcontainer: {
    backgroundColor: colors.GRAY,
    height: RfH(32),
    width: RfW(32),
    borderRadius: RfH(16),
    justifyContent: 'center',
  },
  postcontainer: {
    flexDirection: 'row',
  },
  namesty: {
    fontSize: 12,
    fontWeight: '500',
    // color: colors.black,
    color: '#1A237E',
    paddingHorizontal: RfW(10),
    lineHeight: RfH(17),
  },
  timesty: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.DARK_GRAY,
    paddingHorizontal: RfW(10),
    lineHeight: RfH(14),
  },
  followcontainer: {flexDirection: 'row'},
  // followbtn: {
  //   width: RfW(30),
  //   height: RfH(30),
  //   borderWidth: 1,
  //   borderColor: colors.black,
  //   borderColor: '#6a11cb',
  //   backgroundColor: '#6a11cb',
  //   borderRadius: RfH(15),
  //   justifyContent: 'center',
  //   marginHorizontal: RfW(10),
  // },

  followcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followbtn: {
    width: RfW(40),
    height: RfW(40),
    backgroundColor: '#6a11cb',
    borderRadius: RfW(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: RfW(10),
  },
  followtxt: {
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
    color: colors.black,
  },
  msgtextsty: {
    marginTop: RfH(10),
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: colors.black,
  },
  massagepostcontainer: {
    borderWidth: 1,
    padding: RfH(10),
    borderRadius: RfH(7),
    // borderColor: colors.LIGHT_BLACK,
    borderColor: '#6a11cb',
  },
});
