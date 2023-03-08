import { Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SpecifiedView from '../components/SpecifiedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function ProductDetailScreen({ route, navigation }) {
  const { itemId } = route.params;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {})();
  // }, []);

  return (
    <SpecifiedView className="bg-white h-[100%]">
      <ScrollView className="p-[30]">
        <View className="rounded-3xl overflow-hidden">
          <Image
            className="h-[250] w-[auto]"
            source={{
              uri: 'https://apollo-singapore.akamaized.net/v1/files/h1it7tqbx7p41-ID/image;s=780x0;q=60',
            }}
          />
        </View>
        <View className="py-[30] gap-[15]">
          <Text className="font-extrabold text-lg">
            Kemeja GAP Blue Denim Second
          </Text>
          <View className="flex flex-row flex-wrap items-center">
            <Text className="font-extrabold pr-[15] text-secondary text-xl">
              Rp 125,000
            </Text>
            <Text className="text-sm">Like new</Text>
          </View>
          <View className="flex flex-row items-center">
            <Ionicons
              name="time-outline"
              size={16}
              style={{
                marginRight: 15,
              }}
            />
            <Text className="text-sm">4 weeks ago by aurero_shop</Text>
          </View>
          <View className="flex flex-row items-center">
            <Ionicons
              name="pulse-outline"
              size={16}
              style={{
                marginRight: 15,
              }}
            />
            <Text className="text-sm">Like new</Text>
          </View>
          <View className="flex flex-row items-center">
            <Ionicons
              name="grid-outline"
              size={16}
              style={{
                marginRight: 15,
              }}
            />
            <Text className="text-sm">Computer</Text>
          </View>
          <View className="flex flex-row items-start">
            <Ionicons
              name="text-outline"
              size={16}
              style={{
                marginRight: 15,
              }}
            />
            <Text className="text-sm  mr-[30]">
              Lorem is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </Text>
          </View>
          <View className="flex flex-row items-start">
            <Ionicons
              name="compass-outline"
              size={16}
              style={{
                marginRight: 15,
              }}
            />
            <Text className="text-sm  mr-[30]">Kota Jakarta Pusat</Text>
          </View>
          <View className="flex items-start pt-[15]">
            <Text className="text-lg font-extrabold">Seller Profile</Text>
            <View className="flex flex-row py-[15]">
              <View className="w-10 h-10 rounded-full bg-red-100 mr-[15]" />
              <View className="">
                <Text className="text-md pb-[5] font-extrabold text-secondary">
                  aurero_shop
                </Text>
                <Text className="text-xs">join one day ago</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex px-[30] gap-[30] mb-[70]">
          <TouchableOpacity
            className="py-[20] flex flex-row justify-center items-center rounded-3xl bg-primary shadow-lg shadow-primary"
            onPress={() => navigation.navigate('Explore')}
          >
            <Ionicons
              name="cart-outline"
              size={21}
              style={{
                marginRight: 15,
              }}
              color="white"
            />
            <Text
              className="text-[14] text-center text-secondaryLight"
              style={{
                fontFamily: 'Inter_900Black',
              }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-[20] flex flex-row justify-center items-center rounded-3xl bg-secondaryLight shadow-lg shadow-secondary"
            onPress={() => navigation.push('SignInScreen')}
          >
            <Ionicons
              name="chatbubbles-outline"
              size={21}
              style={{
                marginRight: 15,
              }}
              color="#EA4C89"
            />
            <Text
              className="text-[14] text-center text-secondary"
              style={{
                fontFamily: 'Inter_900Black',
              }}
            >
              Chat Seller
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SpecifiedView>
  );
}
