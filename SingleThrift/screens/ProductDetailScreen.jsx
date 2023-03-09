import {
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Image,
  useWindowDimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import SpecifiedView from "../components/SpecifiedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { BASE_URL_NGROK } from "../actions/actionType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchCartBuyer } from "../actions/actionCreator";
import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../actions/actionCreator";
import moment from "moment/moment";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Auth } from "aws-amplify";

export default function ProductDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const dispatch = useDispatch();
  console.log(id, `ini Idnya di detail screen`);
  const { isLoading, productDetails, error } = useSelector((state) => {
    return state.productDetail;
  });

  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, []);
  //PART OF CAROUSEL
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();
  //END

  const handleAddToCart = async () => {
    try {
      // console.log('masuk handle', itemId);
      const accessToken = JSON.parse(
        await AsyncStorage.getItem("access_token")
      );
      // console.log(accessToken);
      const { data } = await axios({
        method: "POST",
        url: `${BASE_URL_NGROK}/cart/${itemId}`,
        headers: {
          access_token: accessToken,
        },
      });
      // console.log(data);
      dispatch(fetchCartBuyer());
      navigation.navigate("HomeTabScreen");
    } catch (error) {
      alert(error);
    }
  };

  // jeane chat start
  const [user, setUser] = useState(null);
  // loop through chat.user.items and find a user thats not us (Authenticated user)
  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      console.log(authUser.attributes.sub, "ini yg fetch");
      const userItem = chat.Users.items.find(
        (item) => item.user.id !== authUser.attributes.sub
      );
      setUser(userItem?.user);
    };

    fetchUser();
  }, []);

  const goToChat = () => {
    navigation.navigate("Chat", {
      id: "76ac200f-4724-4226-8084-d4084417b98d",
      name: user?.name,
    });
  };
  console.log(user, "ini user");
  // 76ac200f-4724-4226-8084-d4084417b98d
  // jeane chat end

  return (
    <SpecifiedView style={styles.centerContainer} className="bg-white h-[100%]">
      <ScrollView className="p-[30]">
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX,
                    },
                  },
                },
              ],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={1}
          >
            {productDetails?.Images?.map((el, imageIndex) => {
              return (
                <View style={{ width: 300, height: 250 }} key={imageIndex}>
                  <ImageBackground
                    source={{ uri: el.imageUrl }}
                    style={styles.card}
                  ></ImageBackground>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {productDetails?.Images?.map((el, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp",
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
        <View className="py-[30] gap-[15]">
          <Text className="font-extrabold text-lg">{productDetails?.name}</Text>
          <View className="flex flex-row flex-wrap items-center">
            <Text className="font-extrabold pr-[15] text-secondary text-xl">
              <FormatRupiah value={productDetails?.price} />
              {/* Rp {productDetails?.price} */}
            </Text>
            <Text className="text-sm">{productDetails?.condition}</Text>
          </View>
          <View className="flex flex-row items-center">
            <Ionicons
              name="time-outline"
              size={16}
              style={{
                marginRight: 15,
              }}
            />
            <Text className="text-sm">
              {moment(productDetails?.createdAt).startOf("hour").fromNow()} by{" "}
              {productDetails?.User?.username}
            </Text>
          </View>
          <View className="flex flex-row items-center">
            <Ionicons
              name="pulse-outline"
              size={16}
              style={{
                marginRight: 15,
              }}
            />
            <Text className="text-sm">{productDetails?.weight} gram</Text>
          </View>
          <View className="flex flex-row items-center">
            <Ionicons
              name="grid-outline"
              size={16}
              style={{
                marginRight: 15,
              }}
            />
            <Text className="text-sm">{productDetails?.Category?.name}</Text>
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
              {productDetails?.description}
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
            <Text className="text-sm  mr-[30] pb-[10]">
              {productDetails?.User?.address}
            </Text>
          </View>
          <View className="flex items-start pt-[15]">
            <Text className="text-lg font-extrabold">Seller Profile</Text>
            <View className="flex flex-row py-[15]">
              <View className="w-10 h-10 rounded-full bg-red-100 mr-[15]" />
              <View className="">
                <Text className="text-md pb-[5] font-extrabold text-secondary">
                  {productDetails?.User?.username}
                </Text>
                <Text className="text-xs">
                  join{" "}
                  {moment(productDetails?.User?.createdAt)
                    .startOf("hour")
                    .fromNow()}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex px-[30] gap-[30] mb-[70]">
          <TouchableOpacity
            className="py-[20] flex flex-row justify-center items-center rounded-3xl bg-primary shadow-lg shadow-primary"
            onPress={(itemId) => handleAddToCart(itemId)}
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
                fontFamily: "Inter_900Black",
              }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-[20] flex flex-row justify-center items-center rounded-3xl bg-secondaryLight shadow-lg shadow-secondary"
            onPress={goToChat}
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
                fontFamily: "Inter_900Black",
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

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
