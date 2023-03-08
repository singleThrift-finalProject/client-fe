import { useEffect, useState } from 'react';
import { TextInput, View, Image, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductBuyer } from '../actions/actionCreator';
import Loading from '../components/Loading';
import ProductBuyerCard from '../components/ProductBuyerCard';
import SpecifiedView from '../components/SpecifiedView';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { isLoading, productsBuyer, error } = useSelector((state) => {
    return state.product;
  });

  const [search, setSearch] = useState();
  // console.log(search);
  // console.log(state.prpduct);
  useEffect(() => {
    (async () => {
      dispatch(fetchProductBuyer(search));
    })();
  }, [search]);

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
            <Image
              className="p-[10] h-[24] w-[18]"
              source={require('../assets/icons/locate-icon.png')}
            />
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
            {!isLoading ? (
              productsBuyer?.map((product) => (
                <ProductBuyerCard
                  product={product}
                  key={product.id}
                  navigation={navigation}
                />
              ))
            ) : (
              <Loading />
            )}
          </View>
        </ScrollView>
      </SpecifiedView>
    </>
  );
}
