import { TouchableOpacity, Image, View, Text } from 'react-native';


function ProductBuyerCard({ product, navigation }) {
  // function handleDetailProduct(id) {
  //   console.log(id);
  // }

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetailScreen', {
            itemId: product?.id,
          })
        }
        className="flex w-[44%] overflow-hidden mr-[10] mb-[30]"
      >
        <Image
          className="h-[160] w-full mb-[10] rounded-xl"
          source={{
            uri: `${product?.Images[0].imageUrl}`,
          }}
        />
        <View className="flex gap-[5]">
          <Text className="font-extrabold text-[14px]">{product?.name}</Text>
          <View className="flex flex-row flex-wrap items-center">
            <Text className="font-extrabold pr-[10] text-secondary text-[16px]">
              Rp {product?.price}
            </Text>
            <Text className="text-xs text-[10px]">{product?.condition}</Text>
          </View>
          <View className="flex flex-row">
            <View className="w-3 h-3 rounded-full bg-red-100 mr-[5] mt-[3]" />
            <Text className="text-xs">{product?.User?.username}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default ProductBuyerCard;
