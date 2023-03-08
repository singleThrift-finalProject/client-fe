import { useEffect, useState } from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductSeller } from '../actions/actionCreator';
import ProductSellerCard from '../components/ProductSellerCard';
import SpecifiedView from '../components/SpecifiedView';

export default function DashboardScreen({ navigation }) {
  const dispatch = useDispatch();
  const { isLoading, productsSeller, error } = useSelector((state) => {
    return state.sellerProduct;
  });

  useEffect(() => {
    (async () => {
      dispatch(fetchProductSeller());
    })();
  }, []);

  return (
    <>
      <SpecifiedView className="bg-white h-[100%]">
        <View className="flex flex-row items-center justify-end px-[30] py-[30]">
      
          <Text className="text-lg font-extrabold pr-[20]">Add Product</Text>

          <TouchableOpacity
            onPress={() => navigation.push('AddProductScreen')}
            className="bg-secondaryLight px-[20] py-[15] flex flex-row items-center rounded-3xl shadow-xl shadow-gray-400"
          >
            <Image
              className="p-[10] h-[24] w-[18]"
              source={require('../assets/icons/add-product.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View className="flex-row justify-between flex-1 flex-wrap px-[30]">
             {!isLoading ? (
              productsSeller?.map((product) => (
                <ProductSellerCard product={product} key={product.id} navigation={navigation}/>
              ))
            ) : (
              <Text>Loading ...</Text>
            )}
          </View>
        </ScrollView>
      </SpecifiedView>
    </>
  );
}
