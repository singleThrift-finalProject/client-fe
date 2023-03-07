import { ScrollView, Text, View } from 'react-native';
import SpecifiedView from '../components/SpecifiedView';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PendingTransactionScreen() {
  return (
    <>
      <SpecifiedView className="bg-white h-[100%] p-[30]">
        <ScrollView>
          <Text className="pb-[10] font-extrabold text-lg ">
            History Transaction Pending
          </Text>
          <View className="flex flex-row py-[20] justify-between items-center border-b border-gray-200">
            <View className="flex flex-row">
              <View className="gap-[15] pr-[15]">
                <Text className="font-extrabold">No</Text>
                <Text className="font-extrabold">Total Price</Text>
                <Text className="font-extrabold">Created At</Text>
              </View>
              <View className="gap-[15] pr-[15]">
                <Text>:</Text>
                <Text>:</Text>
                <Text>:</Text>
              </View>
              <View className="gap-[15]">
                <Text>ST892723817289</Text>
                <Text>Rp 250,000</Text>
                <Text>04/03/2023</Text>
              </View>
            </View>
            <Ionicons
              name="timer-outline"
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
