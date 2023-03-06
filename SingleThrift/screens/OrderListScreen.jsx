import { ScrollView, Text, View } from 'react-native';
import SpecifiedView from '../components/SpecifiedView';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OrderListScreen() {
  return (
    <>
      <SpecifiedView className="bg-white h-[100%] p-[30]">
        <ScrollView>
          <Text className="pb-[10] font-extrabold text-lg ">
            Order has been payed
          </Text>
          <View className="flex flex-row py-[20] justify-between items-center border-b border-gray-100">
            <View className="flex flex-row">
              <View className="gap-[15] pr-[15]">
                <Text className="font-extrabold">Name</Text>
                <Text className="font-extrabold">Description</Text>
                <Text className="font-extrabold">Payed At</Text>
              </View>
              <View className="gap-[15] pr-[15]">
                <Text>:</Text>
                <Text>:</Text>
                <Text>:</Text>
              </View>
              <View className="gap-[15]">
                <Text>Bambang</Text>
                <Text>Kemeja Polo</Text>
                <Text>04/03/2023</Text>
              </View>
            </View>
            <Ionicons
              name="checkmark-circle-outline"
              size={24}
              style={{
                marginRight: 15,
              }}
              color="#EA4C89"
            />
          </View>
        </ScrollView>
      </SpecifiedView>
    </>
  );
}
