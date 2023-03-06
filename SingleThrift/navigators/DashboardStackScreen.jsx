import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Image, View } from 'react-native';
import DashboardScreen from '../screens/DashboardScreen';

export default function DashboardStackScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard Screen"
        component={DashboardScreen}
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
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
