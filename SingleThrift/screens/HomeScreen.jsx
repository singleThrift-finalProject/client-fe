import { useEffect } from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductBuyer } from '../actions/actionCreator';
import ProductBuyerCard from '../components/ProductBuyerCard';
import SpecifiedView from '../components/SpecifiedView';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { isLoading, productsBuyer, error } = useSelector((state) => {
    return state.product;
  });

  useEffect(() => {
    (async () => {
      dispatch(fetchProductBuyer());
    })();
  }, []);

  return (
    <>
      <SpecifiedView className="bg-white h-[100%]">
        <View className="flex flex-row justify-between px-[30] py-[30]">
          <TextInput
            className="py-[15] px-[20] placeholder:font-extrabold placeholder:text-primary shadow-xl shadow-gray-400 border border-inputStroke bg-white rounded-3xl w-2/4"
            placeholder="Search product"
          />
          <View className="bg-secondaryLight px-[20] flex flex-row items-center rounded-3xl shadow-xl shadow-gray-400">
            <Image
              className="p-[10] h-[24] w-[18]"
              source={require('../assets/icons/locate-icon.png')}
            />
          </View>
          <View className="bg-primary px-[20] flex flex-row items-center rounded-3xl shadow-xl shadow-gray-400">
            <Image
              className="p-[10] h-[18] w-[18]"
              source={require('../assets/icons/search-icon.png')}
            />
          </View>
        </View>
        <ScrollView>
          <View className="flex-row justify-between flex-1 flex-wrap px-[30]">
            {!isLoading ? (
              productsBuyer?.map((product) => (
                <ProductBuyerCard
                  product={product}
                  key={product.id}
                  navigation={navigation}
                />
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
