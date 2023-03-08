import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import SpecifiedView from '../components/SpecifiedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { getCity } from '../actions/actionCreator';
import axios from 'axios';
import { BASE_URL_NGROK } from '../actions/actionType';

export default function AdressPaymentScreen({ navigation }) {
  const dispatch = useDispatch();
  // const { isLoading, cities, error } = useSelector((state) => state.city);
  const [selectedCity, setSelectedCity] = useState();
  const [inputValues, setInputValues] = useState({
    address: '',
  });
  // console.log({ ...inputValues, selectedCity });

  const handleInputChange = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const handleCheckout = async () => {
    console.log(+selectedCity, typeof selectedCity);
    try {
      const getAccessToken = await AsyncStorage.getItem('access_token');
      if (getAccessToken) {
        const accessToken = JSON.parse(getAccessToken);
        // console.log(accessToken);
        const { data } = await axios({
          method: 'POST',
          url: `${BASE_URL_NGROK}/payment/midtrans`,
          data: { destination: selectedCity },
          headers: {
            access_token: accessToken,
          },
        });
        // console.log(data, '<<<<<');
        navigation.navigate('PaymentMidtrans', {
          data: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  // useEffect(() => {
  //   (async () => {
  //     await dispatch(getCity());
  //   })();
  // }, []);
  if (!fontsLoaded) {
    return null;
  }

  // console.log(cities);

  return (
    <>
      <SpecifiedView className="bg-white h-[100%]">
        <ScrollView className="py-[60] px-[30] mb-[20]">
          <Text
            className="text-3xl text-center"
            style={{
              fontFamily: 'Inter_900Black',
            }}
          >
            One more step to get your product
          </Text>
          <View className="flex flex-row justify-center py-[20]">
            <Image
              className="h-[100] w-[100]"
              source={{
                uri: 'https://cdn.discordapp.com/attachments/1078712407863595140/1082812266409373726/7dngh6.gif',
              }}
            />
          </View>
        </ScrollView>
        <View className="py-[30] bg-primary rounded-t-3xl">
          <Text className="text-lg text-white font-extrabold px-[30]">
            Input Adress
          </Text>
          <View className="flex p-[30] gap-[30] justify-between">
            <View className="rounded-3xl overflow-hidden bg-white shadow-xl shadow-gray-400 border border-inputStroke py-[3] pl-[3] mb-[15]">
              <Picker
                selectedValue={selectedCity}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCity(itemValue)
                }
              >
                <Picker.Item label="Select City" value="152" />
                <Picker.Item label="Jakarta Pusat" value="152" />
                <Picker.Item label="Bogor" value="79" />
                <Picker.Item label="Depok" value="115" />
                <Picker.Item label="Tangerang" value="455" />
                <Picker.Item label="Bekasi" value="54" />
              </Picker>
            </View>
            <View className="">
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={{ textAlignVertical: 'top' }}
                onChangeText={(value) => handleInputChange('address', value)}
                className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl text-start"
                placeholder="Adress"
              />
            </View>
          </View>
          <View className="flex px-[30] gap-[30] pb-[20]">
            <TouchableOpacity
              className="py-[20] flex flex-row justify-center items-center rounded-3xl bg-white shadow-lg shadow-primary"
              onPress={() => handleCheckout()}
            >
              <Text
                className="text-[14] text-center text-primary pr-[15]"
                style={{
                  fontFamily: 'Inter_900Black',
                }}
              >
                Pay product now
              </Text>
              <Ionicons
                name="arrow-forward-outline"
                size={21}
                style={{
                  marginRight: 15,
                }}
                color="#2A2526"
              />
            </TouchableOpacity>
          </View>
        </View>
      </SpecifiedView>
    </>
  );
}
