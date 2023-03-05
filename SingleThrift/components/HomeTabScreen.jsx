import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionScreen from '../screens/TransactionScreen';
import ExploreStackScreen from './ExploreStackScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function HomeTabScreen() {
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

          if (route.name === 'Explore') {
            iconName = focused ? 'rocket' : 'rocket-outline';
          } else if (route.name === 'Transaction') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EA4C89',
        tabBarInactiveTintColor: '#EA4C89',
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 20,
          height: 85,
          // margin: 30,
          // borderRadius:  24,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 700,
          color: '#2A2526',
        },
      })}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Transaction" component={TransactionScreen} />
    </Tab.Navigator>
  );
}
