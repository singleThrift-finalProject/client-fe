import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductBuyer } from "../actions/actionCreator";
import Loading from "../components/Loading";
import ProductBuyerCard from "../components/ProductBuyerCard";
import SpecifiedView from "../components/SpecifiedView";
// location jeane
import * as Location from "expo-location";
import distance, { calculateDistance } from "../actions/calculate";

export default function HomeScreenCopy({ navigation }) {
  const dispatch = useDispatch();
  const { isLoading, productsBuyer, error } = useSelector((state) => {
    return state.product;
  });

  const [search, setSearch] = useState();
  // console.log(search);

  useEffect(() => {
    (async () => {
      dispatch(fetchProductBuyer(search));
    })();
  }, [search]);

  // jeane location start
  const [isFilter, setIsFilter] = useState(false);
  const [products, setProducts] = useState();
  const [location, setLocation] = useState();
  console.log(isFilter, "awal render");
  console.log(products, "ini produk");
  // let sendLong;
  // let sendLat;

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location permissions");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      // console.log("Location:");
      // console.log(currentLocation);
      // console.log(currentLocation.coords.longitude, "ini");
    };
    getPermissions();
  }, []);
  const handleLocation = async () => {
    // console.log(location, "ini locc");
    console.log("masuk location nearme");
    console.log(isFilter, "ini saat ke loc");
    setIsFilter(true);
    for (i = 0; i < productsBuyer.length; i++) {
      productsBuyer[i]["distance"] = calculateDistance(
        productsBuyer[0].User.UserStoreAddress.latitude,
        productsBuyer[0].User.UserStoreAddress.longitude,
        productsBuyer[i].User.UserStoreAddress.latitude,
        productsBuyer[i].User.UserStoreAddress.longitude,
        "K"
      );
    }

    let doneFilter = productsBuyer.sort(function (a, b) {
      return a.distance - b.distance;
    });
    setProducts(doneFilter);

    // masukin jaraknya ke arr lalu sort
  };
  console.log(isFilter, "iniii");
  // jeane location end

  return (
    <>
      <SpecifiedView className="bg-white h-[100%]">
        <View className="flex flex-row justify-between px-[30] py-[30]">
          <TextInput
            className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl w-3/4"
            placeholder="Search product"
            onChangeText={(value) => setSearch(value)}
            value={search}
          />
          <View className="bg-secondaryLight px-[20] flex flex-row items-center rounded-3xl shadow-xl shadow-gray-400">
            <Pressable onPress={handleLocation}>
              <Image
                className="p-[10] h-[24] w-[18]"
                source={require("../assets/icons/locate-icon.png")}
              />
            </Pressable>
          </View>
          {/* <View className="bg-primary px-[20] flex flex-row items-center rounded-3xl shadow-xl shadow-gray-400">
            <Image
              className="p-[10] h-[18] w-[18]"
              source={require('../assets/icons/search-icon.png')}
            />
          </View> */}
        </View>
        <ScrollView>
          <View className="flex-row justify-between flex-1 flex-wrap px-[30]">
            {
              !isLoading && !isFilter
                ? productsBuyer?.map((product) => (
                    <ProductBuyerCard
                      product={product}
                      key={product.id}
                      navigation={navigation}
                      location={location}
                    />
                  ))
                : products?.map((product) => (
                    <ProductBuyerCard
                      product={product}
                      key={product.id}
                      navigation={navigation}
                      location={location}
                    />
                  ))
              // <Loading />
            }
          </View>
        </ScrollView>
      </SpecifiedView>
    </>
  );
}
