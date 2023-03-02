
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LandingScreen from './screens/LandingScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    // <ScrollView>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "home"
                : "home";
            } else if (route.name === "Menu") {
              iconName = focused ? "book" : "book";
            } else if (route.name === "About") {
              iconName = focused ? "map" : "map-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        {/* <Tab.Screen name="Landing" options={{ headerShown: false }} component={LandingScreen} /> */}
        {/* <Tab.Screen name="Home" options={{ headerShown: false }} component={HomePage} />
            <Tab.Screen name="Menu" options={{ headerShown: false }} component={MenuStack} /> */}
        {/* <Tab.Screen name="About"
              options={{
                headerTitle: (props) => <HeadingAbout {...props} />,
                headerStyle: { height: 75 },
                headerTitleAlign: 'center'
              }} component={AboutPage} /> */}
      </Tab.Navigator>
    // </ScrollView>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <ScrollView>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Landing' component={LandingScreen} />
          <Stack.Screen name='BottomTab' component={BottomTab} />
          <Stack.Screen name='Details' component={ProductDetailsScreen} />
        </Stack.Navigator>
      </ScrollView>
    </NavigationContainer>

  );
}


