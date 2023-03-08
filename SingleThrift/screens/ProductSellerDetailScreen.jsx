import SpecifiedView from '../components/SpecifiedView';
import React, { useRef, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fetchProductDetail } from '../actions/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Image,
  useWindowDimensions,
  Text,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment/moment';
import { FormatRupiah } from "@arismun/format-rupiah";

export default function ProductSellerDetailScreen({ route, navigation }) {

  const { id } = route.params
  const dispatch = useDispatch()
  console.log(id, `ini Idnya di detail screen`)
  const { isLoading, productDetails, error } = useSelector((state) => {
    return state.productDetail;
  });

  console.log(productDetails, `ini di sreen`)
  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, []);
  //PART OF CAROUSEL
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();
  //END

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
                <View
                  style={{ width: 300, height: 250 }}
                  key={imageIndex}
                >
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
          <Text className="font-extrabold text-lg">
            {productDetails?.name}
          </Text>
          <View className="flex flex-row flex-wrap items-center">
            <Text className="font-extrabold pr-[15] text-secondary text-xl">
              <FormatRupiah value={productDetails?.price}/>
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
            <Text className="text-sm">{moment(productDetails?.createdAt).startOf('hour').fromNow()} by {productDetails?.User?.username}</Text>
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
            <Text className="text-sm  mr-[30] pb-[10]">{productDetails?.User?.address}</Text>
          </View>
        </View>
        <View className="flex px-[30] gap-[30] mb-[70]">
          <TouchableOpacity
            className="py-[20] flex flex-row justify-center items-center rounded-3xl bg-primary shadow-lg shadow-primary"
            onPress={() => navigation.navigate('EditProductScreen')}
          >
            <Ionicons
              name="create-outline"
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
              Edit Product
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
