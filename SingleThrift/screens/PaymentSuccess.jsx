import SpecifiedView from '../components/SpecifiedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function PaymentSuccessScreen({ navigation }) {
  return (
    <>
      <SpecifiedView className="bg-white h-[100%]">
        <View className="flex items-center h-[100%] justify-center px-[30]">
          <Image
            className="h-[105] w-[105]"
            source={require('../assets/images/logo-payment-success.png')}
          />
          <View className="flex justify-center items-center py-[15] px-[30]">
            <Text className="text-2xl font-extrabold pb-[10]">
              Payment Success
            </Text>
            <Text className="text-center">
              Hello, dudung. Thank you for shopping with airurero_shop. Your
              payment for Logitech Wireless MK3 has been verified.
            </Text>
          </View>
          <View className="flex flex-row pt-[15] mb-[70] px-[30]">
            <TouchableOpacity
              className="py-[20] w-full flex flex-row items-center justify-center rounded-3xl bg-secondaryLight shadow-lg shadow-secondary"
              onPress={() => navigation.navigate('Explore')}
            >
              <Ionicons
                name="home-outline"
                size={21}
                style={{
                  marginRight: 15,
                }}
                color="#EA4C89"
              />
              <Text
                className="text-[14] text-secondary"
                style={{
                  fontFamily: 'Inter_900Black',
                }}
              >
                Back to Home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SpecifiedView>
    </>
  );
}
