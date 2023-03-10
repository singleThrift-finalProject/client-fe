import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import SpecifiedView from '../components/SpecifiedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartBuyer } from '../actions/actionCreator';
import { useEffect } from 'react';
import CartCard from '../components/CartCard';
import Loading from '../components/Loading';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL_NGROK } from '../actions/actionType';

export default function CartScreen({ navigation }) {
  const { isLoading, carts, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let totalAmount = 0;
  carts?.map((cart) => {
    return (totalAmount += +cart.Product.price);
  });
  const total = carts.length;

  const handleCheckout = async () => {
    console.log('masuk handle checkout');
    try {
      const getAccessToken = await AsyncStorage.getItem('access_token');
      if (getAccessToken) {
        const accessToken = JSON.parse(getAccessToken);
        console.log(accessToken);
        const { data } = await axios({
          method: 'POST',
          url: `${BASE_URL_NGROK}/payment`,
          headers: {
            access_token: accessToken,
          },
        });
        console.log(data);
        navigation.navigate('AdressPaymentScreen');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await dispatch(fetchCartBuyer());
    })();
  }, []);

  if (!carts.length) {
    return (
      <>
        <View className="flex bg-white h-[100%]">
          <Loading />
        </View>
      </>
    );
  }

  return (
    <>
      <SpecifiedView className="bg-white h-[100%]">
        <ScrollView className="py-[40] px-[30] mb-[20]">
          {!isLoading ? (
            carts?.map((cart) => <CartCard cart={cart} key={cart.id} />)
          ) : (
            <Loading />
          )}
        </ScrollView>
        <View className="py-[30] bg-primary rounded-t-3xl">
          <Text className="text-lg text-white font-extrabold px-[30]">
            Detail Transaction
          </Text>
          <View className="flex flex-row p-[30] justify-between">
            <View className="flex">
              <Text className="text-white pb-[5]">Amount IDR</Text>
              <Text className="pr-[15] pb-[15] text-4xl font-extrabold text-secondary">
                {totalAmount}
              </Text>
            </View>
            <View className="flex">
              <Text className="text-white pb-[5]">Quantity</Text>
              <Text className="text-white pr-[15] pb-[15] text-4xl font-extrabold">
                {total} Pcs
              </Text>
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
                Process to Checkout
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
