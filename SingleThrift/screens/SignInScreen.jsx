import {
  ImageBackground,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SpecifiedView from '../components/SpecifiedView';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import React from 'react';

export default function SignInScreen() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SpecifiedView className="bg-white h-[100%]">
      <ImageBackground
        className="h-[190]"
        source={require('../assets/images/register-background-image.png')}
      />
      <Image
        className="h-[100] w-[100] absolute right-[30] top-[130]"
        source={require('../assets/images/logo.png')}
      />
      <View className="p-[30]">
        <Text
          className="text-[32px]"
          style={{
            fontFamily: 'Inter_900Black',
          }}
        >
          Sign In
        </Text>
        <View className="flex gap-[20] py-[30]">
          <TextInput
            className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
            placeholder="Email"
          />
          <TextInput
            className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl mb-[15]"
            secureTextEntry
            placeholder="Password"
          />
          <TouchableOpacity
            className="py-[20] rounded-3xl bg-secondary shadow-lg shadow-secondary"
            onPress={() => navigation.push('SignUpScreen')}
          >
            <Text
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
    </SpecifiedView>
  );
}
