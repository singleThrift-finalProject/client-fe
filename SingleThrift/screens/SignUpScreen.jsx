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
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { BASE_URL_NGROK } from '../actions/actionType';
import React, { useState } from 'react';
import SpecifiedView from '../components/SpecifiedView';
import axios from 'axios';

export default function SignUpScreen({ navigation }) {
  const [selectedRole, setSelectedRole] = useState();
  const [inputValues, setInputValues] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });

  const handleInputChange = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(`${BASE_URL_NGROK}/users/register`, {
        ...inputValues,
        role: selectedRole,
      });
      setInputValues({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
      });
      navigation.navigate('SignInScreen');
      alert(`Berhasil menambahkan data user ${data.email}`);
    } catch (error) {
      alert(error);
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
              onChangeText={(value) => handleInputChange('username', value)}
              value={inputValues.username}
            />
            {/* <Text>{inputValues.username}</Text> */}
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Email"
              onChangeText={(value) => handleInputChange('email', value)}
              value={inputValues.email}
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              secureTextEntry
              placeholder="Password"
              onChangeText={(value) => handleInputChange('password', value)}
              value={inputValues.password}
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Phone Number"
              onChangeText={(value) => handleInputChange('phoneNumber', value)}
              value={inputValues.phoneNumber}
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Adress"
              onChangeText={(value) => handleInputChange('address', value)}
              value={inputValues.address}
            />
            <View className="rounded-3xl overflow-hidden bg-white shadow-xl shadow-gray-400 border border-inputStroke py-[3] pl-[3] mb-[15]">
              <Picker
                selectedValue={selectedRole}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedRole(itemValue)
                }
              >
                <Picker.Item label="Buyer" value="buyer" />
                <Picker.Item label="Seller" value="seller" />
              </Picker>
            </View>
            <TouchableOpacity
              className="py-[20] rounded-3xl bg-primary shadow-lg shadow-primary"
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
