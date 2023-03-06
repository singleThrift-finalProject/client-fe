import {
  ImageBackground,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import SpecifiedView from '../components/SpecifiedView';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function SignInScreen({ navigation }) {
  // let [fontsLoaded] = useFonts({
  //   Inter_900Black,
  // });
  // if (!fontsLoaded) {
  //   return null;
  // }

  // const storeData = async (key, value) => {
  //   try {
  //     await AsyncStorage.setItem(key, value);
  //     console.log('Data stored successfully');
  //   } catch (error) {
  //     console.log(`Error storing data: ${error}`);
  //   }
  // };

  // const getData = async (key) => {
  //   try {
  //     const value = await AsyncStorage.getItem(key);
  //     if (value !== null) {
  //       console.log(`Retrieved value for key ${key}: ${value}`);
  //     } else {
  //       console.log(`No value found for key ${key}`);
  //     }
  //   } catch (error) {
  //     console.log(`Error retrieving data: ${error}`);
  //   }
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
    // console.log('harusnya masuk sih pak');
    // console.log('oke pak kalau masuk, lanjut ya');
    try {
      // console.log(inputValues);
      const { data } = await axios.post(
        'https://095d-120-188-32-141.ap.ngrok.io/users/login',
        inputValues
      );
      // console.log(data, typeof data);
      await AsyncStorage.setItem(
        'access_token',
        JSON.stringify(data.access_token)
      );
      await AsyncStorage.setItem('role', JSON.stringify(data.role));
      const getRole = await AsyncStorage.getItem('role');
      const role = JSON.parse(getRole);
      // console.log(role);
      if (role === 'buyer') {
        // console.log('masuk ke buyer');
        navigation.navigate('HomeTabScreen');
      } else {
        // console.log('masuk ke seller');
        navigation.navigate('DashboardTabScreen');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const tokenLogin = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('access_token');
      const role = await AsyncStorage.getItem('role');
      if (accessToken !== null) {
        if (JSON.parse(role) === 'buyer') {
          navigation.navigate('HomeTabScreen');
        } else {
          navigation.navigate('DashboardTabScreen');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await tokenLogin();
    })();
  }, []);

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
              // onPress={() => navigation.navigate('HomeTabScreen')}
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
