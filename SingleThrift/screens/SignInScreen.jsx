import {
  ImageBackground,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { useDispatch } from 'react-redux';
import { setLogin } from '../actions/actionCreator';
import React, { useState } from 'react';
import SpecifiedView from '../components/SpecifiedView';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ToastManager, { Toast } from 'toastify-react-native';

export default function SignInScreen({ navigation }) {
  const dispatch = useDispatch();

  // const showToasts = () => {
  //   Toast.error('Promised is resolved');
  // };

  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await dispatch(setLogin(inputValues));
      tokenLogin();
    } catch (error) {
      console.log(error);
    }
  };

  const tokenLogin = async () => {
    try {
      const accessToken = JSON.parse(
        await AsyncStorage.getItem('access_token')
      );
      const data = JSON.parse(await AsyncStorage.getItem('data'));
      if (accessToken !== null) {
        if (data.role === 'buyer') {
          navigation.navigate('HomeTabScreen');
        } else if (data.role === 'seller') {
          navigation.navigate('DashboardTabScreen');
        } else {
          alert('Wrong username & Password');
        }
      } else {
        alert('Wrong username & Password');
      }
    } catch (error) {
      console.log(error);
    }
  };

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SpecifiedView className="bg-white h-[100%]">
      <ScrollView>
        <ImageBackground
          className="h-[190]"
          source={require('../assets/images/register-background-image.png')}
        />
        <Image
          className="h-[100] w-[100] absolute left-[30] top-[130]"
          source={require('../assets/images/logo.png')}
        />
        <View className="p-[30]">
          <Text
            className="text-[32px] text-right"
            style={{
              fontFamily: 'Inter_900Black',
            }}
          >
            Sign In
          </Text>
          <View className="flex gap-[20] py-[30]">
            <TextInput
              onChangeText={(value) => handleInputChange('email', value)}
              value={inputValues.email}
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Email"
            />
            <TextInput
              onChangeText={(value) => handleInputChange('password', value)}
              value={inputValues.password}
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl mb-[15]"
              secureTextEntry
              placeholder="Password"
            />
            <TouchableOpacity
              className="py-[20] rounded-3xl bg-secondary shadow-lg shadow-secondary"
              onPress={handleSubmit}
            >
              <Text
                title="Submit"
                className="text-[14] text-center text-secondaryLight"
                style={{
                  fontFamily: 'Inter_900Black',
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SpecifiedView>
  );
}
