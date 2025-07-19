import { StyleSheet } from "react-native";
import { RfH, RfW } from "../../../utils/helper";
import { colors } from "../../../utils";

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
    inputfieldsty:{
      marginVertical: RfH(5),
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: RfH(10),
      paddingHorizontal: RfW(5),
      backgroundColor: colors.LIGHT_GRAY,
      width: RfW(335),
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
      height: RfH(80),
      width: RfW(80),
    },
    txt1: {
      fontSize: 20,
      fontWeight: '500',
      color: '#242424',
      // alignSelf: 'center',
    },
    btnsty: {
      // position: 'absolute',
      // bottom: 20,
      height: RfH(50),
      alignSelf: 'center',
      justifyContent: 'center',
      width: RfW(335),
      borderRadius: RfH(10),
      backgroundColor: '#7966FF',
      marginVertical: RfH(20),
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
      marginVertical: RfH(5),
      top: RfH(5),
    },
    txt2: {
      fontSize: 15,
      fontWeight: '400',
      color: '#242424',
      opacity: 0.6,
      lineHeight: 22.5,
    },
    imgcontainer: {
      marginTop: RfH(20),
      alignSelf: 'center',
    },
    phoneinputcon: {
      marginTop: RfH(15),
      // height: RfH(200),
      alignSelf: 'center',
      borderRadius: RfH(10),
      // elevation: 5,
    },
    txtcontainer: {marginTop: RfH(30), marginLeft: RfW(20)},
    msgtxtsty: {alignSelf: 'center', marginTop: RfH(20), flexDirection: 'row'},
    msgsty: {fontSize: 16, fontWeight: '500', color: 'gray'},
    msgsty2: {fontSize: 16, fontWeight: '500', color: 'blue'},
    pickerContainer: {
      marginVertical: RfH(5),
      marginBottom: RfH(15),
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: RfH(10),
      paddingHorizontal: RfW(5),
      backgroundColor: colors.LIGHT_GRAY,
      width: RfW(335),
    },
    errorText:{
      fontSize:12,fontWeight:'400',color:'red',left:RfW(5)
    }
  });