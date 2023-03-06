import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Image, Text } from 'react-native';
import ExploreStackScreen from './ExploreStackScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import TransactionMTScreen from './TransactionMTScreen';

export default function HomeTabScreen() {
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

          if (route.name === 'Explore') {
            iconName = focused ? 'rocket' : 'rocket-outline';
          } else if (route.name === 'Transaction') {
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
        name="Explore"
        component={ExploreStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionMTScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
              Transaction List
            </Text>
          ),
        })}
      />
    </Tab.Navigator>
  );
}
