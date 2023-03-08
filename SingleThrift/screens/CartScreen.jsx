import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import SpecifiedView from '../components/SpecifiedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartBuyer } from '../actions/actionCreator';
import { useEffect } from 'react';

export default function CartScreen({ navigation }) {
  const { isLoading, carts, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(carts);

  useEffect(() => {
    (async () => {
      await dispatch(fetchCartBuyer());
    })();
  }, []);

  return (
    <>
      <SpecifiedView className="bg-white h-[100%]">
        <ScrollView className="p-[30]">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row gap-[20]">
              <View className="rounded-xl overflow-hidden">
                <Image
                  className="h-[70] w-[70]"
                  source={{
                    uri: 'https://apollo-singapore.akamaized.net/v1/files/h1it7tqbx7p41-ID/image;s=780x0;q=60',
                  }}
                />
              </View>
              <View className="flex h-full gap-[5]">
                <Text className="font-extrabold">
                  Kemeja GAP Blue Denim ...
                </Text>
                <Text className="font-extrabold text-secondary">
                  Rp 250,000
                </Text>
                <Text className="text-xs">airurero_shop</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Ionicons
                name="close-outline"
                size={32}
                color="#EA4C89"
                style={{
                  marginRight: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View className="py-[30] gap-[15]">
            <Text className="text-lg font-extrabold">Detail Transaction</Text>
            <View className="flex flex-row">
              <View>
                <Text className="pr-[15] pb-[15]">Total Price</Text>
                <Text className="pr-[15] pb-[15]">Total Quantity</Text>
                <Text className="pr-[15] pb-[15]">From</Text>
              </View>
              <View>
                <Text className="pr-[15] pb-[15]">:</Text>
                <Text className="pr-[15] pb-[15]">:</Text>
                <Text className="pr-[15] pb-[15]">:</Text>
              </View>
              <View>
                <Text className="pr-[15] pb-[15]">Rp 250,000</Text>
                <Text className="pr-[15] pb-[15]">1 Pcs</Text>
                <Text className="pr-[15] pb-[15]">1 Seller</Text>
              </View>
            </View>
          </View>
          <View className="flex px-[30] gap-[30] mb-[70]">
            <TouchableOpacity
              className="py-[20] flex flex-row justify-center items-center rounded-3xl bg-secondaryLight shadow-lg shadow-secondary"
              onPress={() => navigation.push('PaymentSuccessScreen')}
            >
              <Text
                className="text-[14] text-center text-secondary pr-[15]"
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
                color="#EA4C89"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SpecifiedView>
    </>
  );
}
