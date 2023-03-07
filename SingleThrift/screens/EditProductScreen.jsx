import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SpecifiedView from '../components/SpecifiedView';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import React from 'react';

export default function EditProductScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SpecifiedView className="bg-white h-[100%]">
      <ScrollView>
        <View className="px-[30] pt-[15]">
          <View className="flex gap-[20] py-[30]">
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Name"
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Price"
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Decription"
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl mb-[15]"
              placeholder="Condition"
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl mb-[15]"
              placeholder="Image Url"
            />
            <View className="flex flex-row justify-between">
              <TouchableOpacity
                className="py-[20] rounded-3xl w-[45%] bg-white shadow-lg shadow-primary"
                onPress={() => navigation.push('SignInScreen')}
              >
                <Text
                  className="text-[14] text-center  text-primary"
                  style={{
                    fontFamily: 'Inter_900Black',
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="py-[20] rounded-3xl w-[45%] bg-secondaryLight shadow-lg shadow-primary"
                onPress={() => navigation.push('SignInScreen')}
              >
                <Text
                  className="text-[14] text-center  text-secondary"
                  style={{
                    fontFamily: 'Inter_900Black',
                  }}
                >
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SpecifiedView>
  );
}
