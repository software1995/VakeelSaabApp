import { StyleSheet } from "react-native";
import { colors } from "../../../utils";
import { RfH, RfW } from "../../../utils/helper";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    phoneInputContainer: {
      borderWidth: 0.5,
      borderColor: '#ccc',
      borderRadius: 5,
      marginTop: RfH(20),
      height: RfH(55),
      backgroundColor: 'red',
    },
    phoneInputTextContainer: {
      left: RfW(-15),
    },
    txtcon: {
      marginTop: RfH(5),
    },
    phoneInputText: {
      fontSize: 16,
      position: 'absolute',
      bottom: 0,
    },
    imgsty: {
      height: RfH(100),
      width: RfW(100),
    },
    txt1: {
      fontSize: 20,
      fontWeight: '500',
      color: '#242424',
    },
    btnsty: {
      height: RfH(50),
      alignSelf: 'center',
      justifyContent: 'center',
      width: RfW(335),
      borderRadius: RfH(10),
      backgroundColor: '#7966FF',
      marginTop: RfH(30),
    },
    btntxtsty: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 15,
      fontWeight: '500',
    },
    placeholderheader: {
      fontSize: 16,
      fontWeight: '500',
      color: '#242424',
      left: RfH(2),
    },
    txt2: {
      fontSize: 15,
      fontWeight: '400',
      color: '#242424',
      opacity: 0.6,
      lineHeight: 22.5,
    },
    imgcontainer: {
      marginTop: RfH(40),
      alignSelf: 'center',
    },
    phoneinputcon: {
      marginTop: RfH(20),
      alignSelf: 'center',
      borderRadius: RfH(10),
    },
    txtcontainer: {
      marginTop: RfH(30),
      marginLeft: RfW(20),
    },
    msgtxtsty: {
      alignSelf: 'center',
      marginTop: RfH(20),
      flexDirection: 'row',
    },
    msgsty: {
      fontSize: 16,
      fontWeight: '500',
      color: 'gray',
    },
    msgsty2: {
      fontSize: 16,
      fontWeight: '500',
      color: 'blue',
    },
    inputfildsty: {
      marginVertical: RfH(5),
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: RfH(10),
      paddingHorizontal: RfW(5),
      backgroundColor: colors.LIGHT_GRAY,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: RfW(335),
    },
    error: {fontSize: 12, color: 'red', fontWeight: '400',left:RfW(5),marginBottom:RfH(5)},
  });