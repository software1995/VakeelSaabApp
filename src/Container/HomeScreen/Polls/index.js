import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import RNPoll from 'react-native-poll';
import {colors} from '../../../utils';
import {RfH, RfW} from '../../../utils/helper';

const Polls = ({name, Day, ProfileImage}) => {
  const choices = [
    {id: 1, choice: 'Narendra Modi', votes: 12},
    {id: 2, choice: 'Rahul Gandhi', votes: 1},
    {id: 4, choice: 'Arvind Kejariwal', votes: 5},
    {id: 5, choice: 'Akhilesh Yadav', votes: 9},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.pollscontainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: RfH(13),
          }}>
          <View style={styles.postcontainer}>
            <View style={styles.imgcontainer}>
              <Image
                source={ProfileImage}
                style={{height: RfH(19), width: RfW(17), alignSelf: 'center'}}
              />
            </View>
            <View>
              <Text style={styles.namesty}>{name}</Text>
              <Text style={styles.timesty}>{Day}</Text>
            </View>
          </View>
          <View style={styles.followcontainer}>
            <TouchableOpacity style={styles.followbtn}>
              <Text style={styles.followtxt}>follow</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/images/dots.png')}
                style={{height: RfH(12.54), width: RfW(3), top: RfH(3)}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <RNPoll
          appearFrom="left"
          animationDuration={750}
          totalVotes={90}
          choices={choices}
          style={styles.polls}
          pollContainerStyle={styles.pollssty}
          choiceTextStyle={{
            fontWeight: '400',
            fontSize: 13,
            color: colors.black,
            height: 18,
            // position: 'absolute',
            // left:0,right:0
          }}
          //   disableBuiltInIncreaseVote={true}
          selectedChoiceBorderWidth={1.5}
          onChoicePress={selectedChoice =>
            console.log('SelectedChoice: ', selectedChoice)
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  pollscontainer: {
    paddingHorizontal: RfW(10),
    borderWidth: 1,
    width: RfW(330),
    alignSelf: 'center',
    borderRadius: RfH(7),
    borderColor: colors.LIGHT_BLACK,
    marginTop: RfH(15),
  },
  polls: {},
  pollssty: {bottom: RfH(10)},
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
    color: colors.black,
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
  followbtn: {
    width: RfW(77),
    height: RfH(22),
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: RfH(7),
    justifyContent: 'center',
    marginHorizontal: RfW(10),
  },
  followtxt: {
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
    color: colors.black,
  },
});

export default Polls;
