import {
  TextInput,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SpecifiedView from '../components/SpecifiedView';

export default function DashboardScreen({ navigation }) {
  return (
    <>
      <SpecifiedView className="bg-white h-[100%]">
        <View className="flex flex-row justify-between px-[30] py-[30]">
          <TextInput
            className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl w-2/4"
            placeholder="Search product"
          />
          <View className="bg-primary px-[20] flex flex-row items-center rounded-3xl shadow-xl shadow-gray-400">
            <Image
              className="p-[10] h-[18] w-[18]"
              source={require('../assets/icons/search-icon.png')}
            />
          </View>
          {/* <TouchableOpacity onPress={() => navigation.push('AddProductScreen')}> */}
          {/* </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => navigation.push('AddProductScreen')}
            className="bg-secondaryLight px-[20] flex flex-row items-center rounded-3xl shadow-xl shadow-gray-400"
          >
            <Image
              className="p-[10] h-[24] w-[18]"
              source={require('../assets/icons/add-product.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View className="flex-row justify-between flex-1 flex-wrap p-[30]">
            <TouchableOpacity
              onPress={() => navigation.push('ProductSellerDetailScreen')}
              className="flex w-[44%] overflow-hidden mr-[10] mb-[30]"
            >
              <Image
                className="h-[160] w-full mb-[10] rounded-xl"
                source={{
                  uri: 'https://apollo-singapore.akamaized.net/v1/files/h1it7tqbx7p41-ID/image;s=780x0;q=60',
                }}
              />
              <View className="flex gap-[5]">
                <Text className="font-extrabold text-[14px]">
                  Kemeja GAP Blue...
                </Text>
                <View className="flex flex-row flex-wrap items-center">
                  <Text className="font-extrabold pr-[10] text-secondary text-[16px]">
                    Rp 125,000
                  </Text>
                  <Text className="text-xs text-[10px]">Like new</Text>
                </View>
                <View className="flex flex-row items-center">
                  <View className="w-3 h-3 rounded-full bg-red-100 mr-[5]" />
                  <Text className="text-xs">aurero_shop</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SpecifiedView>
    </>
  );
}
