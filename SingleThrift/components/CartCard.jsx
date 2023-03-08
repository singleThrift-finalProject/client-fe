import { Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CartCard({ cart }) {
  return (
    <>
      <View className="flex flex-row justify-between items-center pb-[30]">
        <View className="flex flex-row gap-[20]">
          <View className="rounded-xl overflow-hidden">
            <Image
              className="h-[70] w-[70]"
              source={require('../assets/images/logo.png')}
            />
          </View>
          <View className="flex h-full gap-[5]">
            <Text className="font-extrabold">{cart.Product.name}</Text>
            <Text className="font-extrabold text-secondary">
              Rp {cart.Product.price}
            </Text>
            {/* <Text className="text-xs">airurero_shop</Text> */}
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
    </>
  );
}
