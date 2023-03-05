import {
  ImageBackground,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import SpecifiedView from '../components/SpecifiedView';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import React, { useState } from 'react';

export default function SignUpScreen({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();
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
            Register
          </Text>
          <View className="flex gap-[20] py-[30]">
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Username"
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Email"
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              secureTextEntry
              placeholder="Password"
            />
            <View className="rounded-3xl overflow-hidden bg-white shadow-xl shadow-gray-400 border border-inputStroke py-[3] pl-[3]">
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="Buyer" value="java" />
                <Picker.Item label="Seller" value="js" />
              </Picker>
            </View>
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl mb-[15]"
              placeholder="Adress"
            />
            <TouchableOpacity
              className="py-[20] rounded-3xl bg-primary shadow-lg shadow-primary"
              onPress={() => navigation.push('SignInScreen')}
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
      </ScrollView>
    </SpecifiedView>
  );
}
