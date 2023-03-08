import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartBuyer } from '../actions/actionCreator';
import HomeScreen from '../screens/HomeScreen';

export default function ExploreStackScreen({ navigation }) {
  const Stack = createNativeStackNavigator();
  const handleLogout = async () => {
    await AsyncStorage.removeItem('access_token');
    alert('Success logged out');
    navigation.navigate('LandingScreen');
  };
  const dispatch = useDispatch();
  const { isLoading, carts, error } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchCartBuyer());
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => handleLogout()}>
              <Image
                source={require('../assets/icons/logout.png')}
                className="h-[20] w-[20] ml-[30]"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text
              className="text-lg"
              style={{
                fontFamily: 'Inter_900Black',
              }}
            >
              Single Thrift
            </Text>
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
            <View className="flex flex-row mr-[30] gap-[20]">
              <Image
                source={require('../assets/icons/chat.png')}
                className="w-[19] h-[18]"
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('CartScreen')}
                className="relative"
              >
                <View className="bg-secondary flex items-center p-[3] rounded-xl left-[13] top-[-5] absolute z-20">
                  <Text className="text-white px-[4] text-xs">
                    {carts.length !== 0 ? carts.length : 0}
                  </Text>
                </View>
                <Image
                  source={require('../assets/icons/cart.png')}
                  className="w-[21] h-[20]"
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
