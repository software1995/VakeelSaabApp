import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {RfH, RfW} from '../../../utils/helper';
import Header from '../../../utils/Header';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../utils';
import {styles} from './styles';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupScreen = () => {
  // const [fname, setFname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [num, setNum] = useState('');
  // const [email, setEmail] = useState('');
  // const [pin, setPin] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmpassword, setConfirmpassword] = useState('');
  // const [city, setCity] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [selectedState, setSelectedState] = useState('');

  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    num: Yup.string()
      .matches(/^[0-9]+$/, 'Phone Number must contain only digits')
      .min(10, 'Phone Number must be at least 10 characters')
      .required('Phone Number is required'),
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmpassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    pin: Yup.string()
      .required('Pin No. is required')
      .matches(/^[0-9]+$/, 'Pin No. must contain only digits'),
    city: Yup.string().required('City/District is required'),
    // selectedState: Yup.string().required('State is required'),
  });

  const initialValues = {
    fname: '',
    lastname: '',
    num: '',
    email: '',
    password: '',
    confirmpassword: '',
    pin: '',
    city: '',
    // selectedState: '',
  };

  const handleSubmit = values => {
    navigation.navigate('OtpScreen');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header HeaderTxt={'Register'} />

        <ScrollView>
          <View style={styles.imgcontainer}>
            <Image
              source={require('../../../assets/images/splash.png')}
              style={styles.imgsty}
            />
          </View>
          <View style={styles.txtcontainer}>
            <Text style={styles.txt1}>Register Account -</Text>
            <View style={styles.txtcon}>
              <Text style={styles.txt2}>Enter your personal information</Text>
            </View>
          </View>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.phoneinputcon}>
                <View>
                  <Text style={styles.placeholderheader}>First Name</Text>
                </View>
                <View
                  style={{
                    marginVertical: RfH(5),
                    marginBottom: RfH(5),
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: RfH(10),
                    paddingHorizontal: RfW(5),
                    backgroundColor: colors.LIGHT_GRAY,
                    width: RfW(335),
                  }}>
                  <TextInput
                    placeholder="Enter First Name"
                    placeholderTextColor={'gray'}
                    value={values.fname}
                    onChangeText={handleChange('fname')}
                    onBlur={handleBlur('fname')}
                    backgroundColor={'#ccc'}
                    style={{
                      width: '100%',
                      backgroundColor: colors.LIGHT_GRAY,
                      color: '#000',
                      fontSize: 14,
                    }}
                  />
                </View>
                {errors.fname && touched.fname && (
                  <Text style={styles.errorText}>{errors.fname}</Text>
                )}
                <View>
                  <Text style={styles.placeholderheader}>Last Name</Text>
                </View>
                <View style={styles.inputfieldsty}>
                  <TextInput
                    placeholder="Enter Last Name"
                    placeholderTextColor={'gray'}
                    value={values.lastname}
                    onChangeText={handleChange('lastname')}
                    onBlur={handleBlur('lastname')}
                    backgroundColor={'#ccc'}
                    style={{
                      width: '100%',
                      backgroundColor: colors.LIGHT_GRAY,
                      color: '#000',
                      fontSize: 14,
                    }}
                  />
                </View>
                {errors.lastname && touched.lastname && (
                  <Text style={styles.errorText}>{errors.lastname}</Text>
                )}

                <View>
                  <Text style={styles.placeholderheader}>Phone Number</Text>
                </View>
                <View style={styles.inputfieldsty}>
                  <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor={'gray'}
                    value={values.num}
                    onChangeText={handleChange('num')}
                    onBlur={handleBlur('num')}
                    maxLength={10}
                    backgroundColor={'#ccc'}
                    keyboardType="number-pad"
                    style={{
                      width: '100%',
                      backgroundColor: colors.LIGHT_GRAY,
                      color: '#000',
                      fontSize: 14,
                    }}
                  />
                </View>
                {errors.num && touched.num && (
                  <Text style={styles.errorText}>{errors.num}</Text>
                )}
                <View>
                  <Text style={styles.placeholderheader}>Email</Text>
                </View>
                <View style={styles.inputfieldsty}>
                  <TextInput
                    placeholder="Enter Email"
                    placeholderTextColor={'gray'}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    backgroundColor={'#ccc'}
                    style={{
                      width: '100%',
                      backgroundColor: colors.LIGHT_GRAY,
                      color: '#000',
                      fontSize: 14,
                    }}
                  />
                </View>
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <View>
                  <Text style={styles.placeholderheader}>Password</Text>
                </View>
                <View style={[styles.inputfieldsty, {flexDirection: 'row'}]}>
                  <TextInput
                    placeholder="Enter Password"
                    placeholderTextColor={'gray'}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    backgroundColor={'#ccc'}
                    style={{
                      backgroundColor: colors.LIGHT_GRAY,
                      color: '#000',
                      fontSize: 14,
                      width: '85%',
                    }}
                    secureTextEntry={!passwordVisible}
                  />
                  <TouchableOpacity
                    style={{padding: 10, top: RfH(5)}}
                    onPress={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? (
                      <Icon name="eye-outline" size={20} color="#242424" />
                    ) : (
                      <Icon name="eye-off-outline" size={20} color="#242424" />
                    )}
                  </TouchableOpacity>
                </View>
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <View>
                  <Text style={styles.placeholderheader}>Confirm Password</Text>
                </View>
                <View style={[styles.inputfieldsty, {flexDirection: 'row'}]}>
                  <TextInput
                    placeholder="Enter Password"
                    placeholderTextColor={'gray'}
                    value={values.confirmpassword}
                    onChangeText={handleChange('confirmpassword')}
                    onBlur={handleBlur('confirmpassword')}
                    backgroundColor={'#ccc'}
                    style={{
                      backgroundColor: colors.LIGHT_GRAY,
                      color: '#000',
                      fontSize: 14,
                      width: '85%',
                    }}
                    secureTextEntry={!passwordVisible1}
                  />
                  <TouchableOpacity
                    style={{padding: 10, top: RfH(5)}}
                    onPress={() => setPasswordVisible1(!passwordVisible1)}>
                    {passwordVisible1 ? (
                      <Icon name="eye-outline" size={20} color="#242424" />
                    ) : (
                      <Icon name="eye-off-outline" size={20} color="#242424" />
                    )}
                  </TouchableOpacity>
                </View>
                {errors.confirmpassword && touched.confirmpassword && (
                  <Text style={styles.errorText}>{errors.confirmpassword}</Text>
                )}
                <View>
                  <Text style={styles.placeholderheader}>Pin No.</Text>
                </View>
                <View style={styles.inputfieldsty}>
                  <TextInput
                    placeholder="Enter Pin No."
                    placeholderTextColor={'gray'}
                    value={values.pin}
                    onChangeText={handleChange('pin')}
                    onBlur={handleBlur('pin')}
                    backgroundColor={'#ccc'}
                    style={{
                      width: '100%',
                      backgroundColor: colors.LIGHT_GRAY,
                      color: '#000',
                      fontSize: 14,
                    }}
                  />
                </View>
                {errors.pin && touched.pin && (
                  <Text style={styles.errorText}>{errors.pin}</Text>
                )}
                <View>
                  <Text style={styles.placeholderheader}>City/District</Text>
                </View>
                <View style={styles.inputfieldsty}>
                  <TextInput
                    placeholder="Enter District"
                    placeholderTextColor={'gray'}
                    value={values.city}
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    backgroundColor={'#ccc'}
                    style={{
                      width: '100%',
                      backgroundColor: colors.LIGHT_GRAY,
                      color: '#000',
                      fontSize: 14,
                    }}
                  />
                </View>
                {errors.city && touched.city && (
                  <Text style={styles.errorText}>{errors.city}</Text>
                )}
                <View>
                  <Text style={styles.placeholderheader}>Select State</Text>
                </View>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={selectedState}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedState(itemValue)
                    }
                    style={{
                      width: '100%',
                      backgroundColor: colors.LIGHT_GRAY,
                      borderRadius: RfH(10),
                      color: '#000',
                      fontSize: 14,
                    }}>
                    <Picker.Item label="Select State" value="" />
                    <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
                    <Picker.Item label="New Delhi" value="New Delhi" />
                    <Picker.Item label="Bihar" value="Bihar" />
                    <Picker.Item label="Rajasthan" value="Rajasthan" />
                    <Picker.Item label="MadhyaPradesh" value="MadhyaPradesh" />
                    <Picker.Item label="Tamilnadu" value="Tamilnadu" />
                    <Picker.Item label="Gujrat" value="Gujrat" />
                    <Picker.Item label="Mumbai" value="Mumbai" />
                  </Picker>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    handleSubmit(values);
                  }}
                  style={styles.btnsty}
                  activeOpacity={0.8}>
                  <Text style={styles.btntxtsty}>Register</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignupScreen;
