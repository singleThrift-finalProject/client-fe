import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

export default function ExploreStackScreen({ navigation }) {
  const Stack = createNativeStackNavigator();
  const handleLogout = async () => {
    await AsyncStorage.removeItem('access_token');
    alert('Success logged out');
    navigation.navigate('LandingScreen');
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => handleLogout()}>
              <Image
                source={require('../assets/icons/category-bar.png')}
                className="h-[12] w-[18] ml-[30]"
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
              >
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
