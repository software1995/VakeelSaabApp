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
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../utils';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Header from '../../../utils/Header';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const Registration = () => {
  const {t} = useTranslation();
  // const [num, setNum] = React.useState('');
  // const [text, setText] = React.useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    num: Yup.string()
      .required('Phone Number is required')
      .min(10, 'Phone Number must be at least 10 characters')
      .matches(/^[0-9]+$/, 'Phone Number must contain only digits'),
    text: Yup.string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const initialValues = {
    num: '',
    text: '',
  };
  const handleSubmit = values => {
    navigation.navigate('BottomTabStack');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header HeaderTxt={'Login'} />

        <ScrollView>
          <View style={styles.imgcontainer}>
            <Image
              source={require('../../../assets/images/splash.png')}
              style={styles.imgsty}
            />
          </View>
          <View style={styles.txtcontainer}>
            <Text style={styles.txt1}>{t('welcome')}</Text>
            <View style={styles.txtcon}>
              <Text style={styles.txt2}>{t('sampletext')}</Text>
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
                  <Text style={styles.placeholderheader}>Phone Number</Text>
                </View>
                <View style={styles.inputfildsty}>
                  <TextInput
                    placeholder="Enter Phone Number"
                    placeholderTextColor={'gray'}
                    value={values.num}
                    onChangeText={handleChange('num')}
                    onBlur={handleBlur('num')}
                    maxLength={10}
                    backgroundColor={'#ccc'}
                    keyboardType="number-pad"
                    style={{
                      backgroundColor: colors.LIGHT_GRAY,
                      color: '#000',
                      fontSize: 14,
                      width: '100%',
                    }}
                  />
                </View>
                {errors.num && touched.num && (
                  <Text style={styles.error}>{errors.num}</Text>
                )}
                <View>
                  <Text style={styles.placeholderheader}>Password</Text>
                </View>
                <View style={styles.inputfildsty}>
                  <TextInput
                    placeholder="Enter Password"
                    placeholderTextColor={'gray'}
                    value={values.text}
                    onChangeText={handleChange('text')}
                    onBlur={handleBlur('text')}
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
                    style={{padding: 10}}
                    onPress={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? (
                      <Icon name="eye-outline" size={20} color="#242424" />
                    ) : (
                      <Icon name="eye-off-outline" size={20} color="#242424" />
                    )}
                  </TouchableOpacity>
                </View>
                {errors.text && touched.text && (
                  <Text style={styles.error}>{errors.text}</Text>
                )}

                <TouchableOpacity
                  onPress={() => {
                    handleSubmit();
                  }}
                  style={styles.btnsty}
                  activeOpacity={0.8}>
                  <Text style={styles.btntxtsty}>Login</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          <View style={styles.msgtxtsty}>
            <View>
              <Text style={styles.msgsty}>Don't have an account</Text>
            </View>
            <TouchableOpacity
              opacity={0.8}
              onPress={() => navigation.navigate('SignupScreen')}>
              <Text style={styles.msgsty2}> ? Registration</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Registration;
