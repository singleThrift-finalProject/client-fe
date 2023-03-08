import { TouchableOpacity, Image, View, Text } from "react-native";
// jeane import
import distance from "../actions/calculate";

function ProductBuyerCard({ product, navigation, location }) {
  // function handleDetailProduct(id) {
  //   console.log(id);
  // }

  //jeanee location start
  // console.log(product.User.UserStoreAddress.latitude, "ini product");
  // location dari product biar dinamis
  let lat2 = product?.User?.UserStoreAddress?.latitude;
  let lon2 = product?.User?.UserStoreAddress?.longitude;
  // console.log(location, "ini product card");
  let buyerLong = location?.coords?.longitude;
  let buyerLat = location?.coords?.latitude;

  // let calculateRange =
  //   Math.round(getDistanceFromLatLonInKm(buyerLat, buyerLong, lat2, lon2)) +
  //   "km";

  let calculateRange =
    Math.round(distance(buyerLat, buyerLong, lat2, lon2, "K")) + " km";
  // console.log(calculateRange, "ini range");
  if (calculateRange === NaN) {
    return " ";
  }
  // jeane location end

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductDetailScreen", {
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
            <Text className="text-xs ml-5">{calculateRange}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default ProductBuyerCard;
