import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import LandingScreen from './screens/LandingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import HomeTabScreen from './navigators/HomeTabScreen';
import PaymentSuccessScreen from './screens/PaymentSuccess';
import DashboardTabScreen from './navigators/DashboardTabScreen';
import ProductSellerDetailScreen from './screens/ProductSellerDetailScreen';
import EditProductScreen from './screens/EditProductScreen';
import AddProductScreen from './screens/AddProductScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './stores';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const Stack = createNativeStackNavigator();

  const optionHeader = {
    headerTransparent: true,
    headerTitle: '',
    headerTintColor: 'white',
  };
  const optionHeaderSignIn = ({ navigation }) => ({
    ...optionHeader,
    headerLeft: () => (
      <TouchableOpacity
        className="pl-[20] flex-row gap-[10]"
        onPress={() => navigation.push('LandingScreen')}
      >
        <Image
          className="w-[9] h-[16.5]"
          source={require('./assets/icons/chevron-back-white.png')}
        />
        <Text className="text-secondaryLight text-[16px] font-extrabold">
          Home
        </Text>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        className="pl-[20] flex-row gap-[10]"
        onPress={() => navigation.push('SignUpScreen')}
      >
        <Text className="pr-[20] text-secondaryLight text-[16px] font-extrabold">
          Sign Up
        </Text>
      </TouchableOpacity>
    ),
  });
  const optionHeaderSignUp = ({ navigation }) => ({
    ...optionHeader,
    headerLeft: () => (
      <TouchableOpacity
        className="pl-[20] flex-row gap-[10]"
        onPress={() => navigation.push('LandingScreen')}
      >
        <Image
          className="w-[9] h-[16.5]"
          source={require('./assets/icons/chevron-back-white.png')}
        />
        <Text className="text-secondaryLight text-[16px] font-extrabold">
          Home
        </Text>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        className="pl-[20] flex-row gap-[10]"
        onPress={() => navigation.push('SignInScreen')}
      >
        <Text className="pr-[20] text-secondaryLight text-[16px] font-extrabold">
          Sign In
        </Text>
      </TouchableOpacity>
    ),
  });

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('access_token');
      if (token) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    })();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isLogin !== true ? (
            <>
              <Stack.Screen
                name="LandingScreen"
                component={LandingScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={optionHeaderSignIn}
              />
              <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={optionHeaderSignUp}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="HomeTabScreen"
                component={HomeTabScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
                options={({ navigation }) => ({
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Home')}
                    >
                      <Image
                        source={require('./assets/icons/chevron-back-pink.png')}
                        className="h-[17] w-[10] ml-[30]"
                      />
                    </TouchableOpacity>
                  ),
                  headerTitle: '',
                  headerTitleAlign: 'center',
                  headerRight: () => (
                    <Text
                      className="pr-[30]"
                      style={{
                        fontFamily: 'Inter_900Black',
                      }}
                    >
                      Detail Product
                    </Text>
                  ),
                })}
              />
              <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={({ navigation }) => ({
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Home')}
                    >
                      <Image
                        source={require('./assets/icons/chevron-back-pink.png')}
                        className="h-[17] w-[10] ml-[30]"
                      />
                    </TouchableOpacity>
                  ),
                  headerTitle: '',
                  headerTitleAlign: 'center',
                  headerRight: () => (
                    <Text
                      className="pr-[30]"
                      style={{
                        fontFamily: 'Inter_900Black',
                      }}
                    >
                      Cart List
                    </Text>
                  ),
                })}
              />
              <Stack.Screen
                name="PaymentSuccessScreen"
                component={PaymentSuccessScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="DashboardTabScreen"
                component={DashboardTabScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ProductSellerDetailScreen"
                component={ProductSellerDetailScreen}
                options={({ navigation }) => ({
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('DashboardTabScreen')}
                    >
                      <Image
                        source={require('./assets/icons/chevron-back-pink.png')}
                        className="h-[17] w-[10] ml-[30]"
                      />
                    </TouchableOpacity>
                  ),
                  headerTitle: '',
                  headerTitleAlign: 'center',
                  headerRight: () => (
                    <Text
                      className="pr-[30]"
                      style={{
                        fontFamily: 'Inter_900Black',
                      }}
                    >
                      Detail Product
                    </Text>
                  ),
                })}
              />
              <Stack.Screen
                name="EditProductScreen"
                component={EditProductScreen}
                options={({ navigation }) => ({
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('DashboardTabScreen')}
                    >
                      <Image
                        source={require('./assets/icons/chevron-back-pink.png')}
                        className="h-[17] w-[10] ml-[30]"
                      />
                    </TouchableOpacity>
                  ),
                  headerTitle: '',
                  headerTitleAlign: 'center',
                  headerRight: () => (
                    <Text
                      className="pr-[30]"
                      style={{
                        fontFamily: 'Inter_900Black',
                      }}
                    >
                      Edit Product
                    </Text>
                  ),
                })}
              />
              <Stack.Screen
                name="AddProductScreen"
                component={AddProductScreen}
                options={({ navigation }) => ({
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('DashboardTabScreen')}
                    >
                      <Image
                        source={require('./assets/icons/chevron-back-pink.png')}
                        className="h-[17] w-[10] ml-[30]"
                      />
                    </TouchableOpacity>
                  ),
                  headerTitle: '',
                  headerTitleAlign: 'center',
                  headerRight: () => (
                    <Text
                      className="pr-[30]"
                      style={{
                        fontFamily: 'Inter_900Black',
                      }}
                    >
                      Add Product
                    </Text>
                  ),
                })}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
