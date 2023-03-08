import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button, Image, Platform
} from 'react-native';
import SpecifiedView from '../components/SpecifiedView';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL_NGROK } from '../actions/actionType';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../actions/actionCreator';

export default function AddProductScreen({ navigation }) {
  const dispatch = useDispatch();
  const { isLoading, categories, error } = useSelector((state) => {
    return state.category;
  });

  console.log(categories)
  useEffect(() => {
    (async () => {
      dispatch(fetchCategory());
    })();
  }, []);

  const [form, setForm] = useState({});
  const [selectedCondition, setSelectedCondition] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [inputValues, setInputValues] = useState({
    name: '',
    price: '',
    description: '',
    weight: ''
  });
  const [image, setImage] = useState([]);
  // console.log(image,`ini sebelum masuk axios`)
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result, `<<<<<<<<<<<< RESULTTTTTTTTTT`);

    if (!result.canceled) {
      const uri = result.assets.map((perData) => {
        return perData.uri
      });
      // const fileName = uri.map((perData) => {
      //   return perData.split('/').pop()
      // })
      console.log(uri, `ini URI<<<<<<<<<<<<<<<<<<<<<<<<<`)
      // console.log(fileName, `iniFileName<<<<<<<<<<<<<<<<<<<<<<<<<`)
      const formData = new FormData()
      // for(let i = 0; i < uri.length;i++){
      // }
      formData.append("imageUrl", {
        uri:uri,
        name: "gambar 1",
        type: "image/jpeg"
      });
      formData.append('name', inputValues.name)
      formData.append('price', inputValues.price)
      formData.append('description', inputValues.description)
      formData.append('weight', inputValues.weight)
      formData.append('condition', selectedCondition)
      formData.append('CategoryId', selectedCategory)
      setImage(uri)
      setForm(formData)
    }
  };

  console.log(form, `ini form nya>>>>>>>>>>>>>>>>>>>>>>>>>>`)
  const handleInputChange = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const accessToken = JSON.parse(
        await AsyncStorage.getItem('access_token')
      );
      //   const { data } = await axios({
      //   method: "POST",
      //   url: `${BASE_URL_NGROK}/products`,
      //   headers: {
      //     access_token: accessToken,
      //   },
      //   data: form
      // });
      await axios.post(`${BASE_URL_NGROK}/products`, form, {
        headers: {
          access_token: accessToken,
          "Content-Type": "multipart/form-data"
        },
        accept: "application/json",
        'Accept-Language':'en-Us,en;q=0.8'
      })
      console.log(`masuk axios`)
      setInputValues({
        name: '',
        price: '',
        description: '',
        weight: ''
      });
      navigation.navigate('DashboardTabScreen'); alert(`Berhasil menambahkan product`);
    } catch (error) {
      console.log(error.name, `ajajajaja`);
    }
  };
  return (
    <SpecifiedView className="bg-white h-[100%]">
      <ScrollView>
        <View className="px-[30] pt-[15]">
          <View className="flex gap-[20] py-[30]">
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Name"
              onChangeText={(value) => handleInputChange('name', value)}
              value={inputValues.name}
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Price"
              onChangeText={(value) => handleInputChange('price', value)}
              value={inputValues.price}
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Decription"
              onChangeText={(value) => handleInputChange('description', value)}
              value={inputValues.description}
            />
            <TextInput
              className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl"
              placeholder="Weight"
              onChangeText={(value) => handleInputChange('weight', value)}
              value={inputValues.weight}
            />
            <View className="rounded-3xl overflow-hidden bg-white shadow-xl shadow-gray-400 border border-inputStroke py-[3] pl-[3] mb-[15]">
              <Picker
                selectedValue={selectedCondition}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCondition(itemValue)
                }
              >
                <Picker.Item label="Select Condition" enabled={true} />
                <Picker.Item label="Like new" value="Like new" />
                <Picker.Item label="Lightly used" value="Lightly used" />
                <Picker.Item label="Well used" value="Well used" />
                <Picker.Item label="Heavily used" value="Heavily used" />
              </Picker>
            </View>
            <View className="rounded-3xl overflow-hidden bg-white shadow-xl shadow-gray-400 border border-inputStroke py-[3] pl-[3] mb-[15]">
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCategory(itemValue)
                }
              >
                <Picker.Item label="Select Category" enabled={true} />
                {
                  categories?.map((perData) => (
                    <Picker.Item label={perData.name} value={perData.id} key={perData.id} />
                  ))
                }
              </Picker>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {image ? (
                image?.map((perData) => (
                  <Image
                    source={{ uri: perData }}
                    style={{ marginBottom: 10, marginTop: 10, width: 200, height: 200, borderRadius: 20 }}
                  />
                ))
              ) : (
                <></>
              )
              }
            </View>
            <View className="flex flex-row justify-center">
              <TouchableOpacity
                className="py-[20] rounded-3xl w-[45%] bg-white shadow-lg shadow-primary"
                onPress={pickImage}
              >
                <Text
                  className="text-[14] text-center  text-primary"
                  style={{
                    fontFamily: 'Inter_900Black',
                  }}
                >
                  Upload Image
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-between">
              <TouchableOpacity
                className="py-[20] rounded-3xl w-[45%] bg-white shadow-lg shadow-primary"
                onPress={() => navigation.push('DashboardTabScreen')}
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
                onPress={handleSubmit}
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
