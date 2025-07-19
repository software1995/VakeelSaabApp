import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import Header from '../../../utils/Header';
import {styles} from './styles';

const OTPScreen = () => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const timerRef = useRef(null);

  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (index, value) => {
    if (isNaN(Number(value))) {
      return;
    }

    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOTP(otpCopy);

    if (index < 3 && value) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, value) => {
    if (value === '') {
      if (index > 0) {
        otpInputRefs[index - 1].current.focus();
      }
    }
  };

  useEffect(() => {
    // Start the timer
    timerRef.current = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(timerRef.current);
          return 0;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleResendCode = () => {
    setTimer(30);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(timerRef.current);
          return 0;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header HeaderTxt={'OTP'} />
      <View style={styles.otpcon}>
        <View>
          <Image
            source={require('../../../assets/images/splash.png')}
            style={styles.imgsty}
          />
          <View style={styles.txtcontainer}>
            <Text style={styles.txt1}>Verification</Text>
            <View style={styles.txtcon}>
              <Text style={styles.txt2}>
                Enter 4 digit number that sent to{' '}
              </Text>
              <Text style={styles.txt2}> +91 8874369688</Text>
            </View>
          </View>
        </View>
        <View style={styles.otpfieldtcon}>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.input}
                maxLength={1}
                keyboardType="numeric"
                value={digit}
                onChangeText={text => handleOtpChange(index, text)}
                onKeyPress={({nativeEvent}) =>
                  nativeEvent.key === 'Backspace'
                    ? handleBackspace(index, digit)
                    : null
                }
                ref={otpInputRefs[index]}
              />
            ))}
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnsty}>
          <Text style={styles.btntxtsty}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.timecontainer}>
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={styles.txttimer}>Re-send code in</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.timer}> 00:{timer}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;
