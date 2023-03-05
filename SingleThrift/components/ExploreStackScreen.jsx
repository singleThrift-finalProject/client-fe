import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { Text, TouchableOpacity, Image, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function ExploreStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Image
              source={require('../assets/icons/category-bar.png')}
              className="h-[12] w-[18] ml-[30]"
            />
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
