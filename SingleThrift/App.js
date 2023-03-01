
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LandingScreen from './screens/LandingScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MenuStack'
        component={FoodPage}
        options={{
          headerTitle: (props) => <HeadingMenu {...props} />,
          headerStyle: { height: 100 },
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name='Items' component={ItemMenuPage} />
      <Stack.Screen name='Details' component={ItemDetailsPage} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        {/* <ScrollView></ScrollView> */}
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
          <Tab.Screen name="Landing" options={{ headerShown: false }} component={LandingScreen} />
          {/* <Tab.Screen name="Home" options={{ headerShown: false }} component={HomePage} />
          <Tab.Screen name="Menu" options={{ headerShown: false }} component={MenuStack} /> */}
          {/* <Tab.Screen name="About"
            options={{
              headerTitle: (props) => <HeadingAbout {...props} />,
              headerStyle: { height: 75 },
              headerTitleAlign: 'center'
            }} component={AboutPage} /> */}
        </Tab.Navigator>
      </NavigationContainer>

  );
}


