import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Image, Text } from 'react-native';
import DashboardStackScreen from './DashboardStackScreen';
import OrderListScreen from '../screens/OrderListScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DashboardTabScreen() {
  const Tab = createBottomTabNavigator();
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 20;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'apps' : 'apps-outline';
          } else if (route.name === 'Order List') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EA4C89',
        tabBarInactiveTintColor: '#EA4C89',
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 20,
          height: 85,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 700,
          color: '#2A2526',
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Order List"
        component={OrderListScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Image
                source={require('../assets/icons/chevron-back-pink.png')}
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
              Order List
            </Text>
          ),
        })}
      />
    </Tab.Navigator>
  );
}
