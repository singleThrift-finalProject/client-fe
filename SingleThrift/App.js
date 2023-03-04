import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screens/LandingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { Text, TouchableOpacity, Image } from 'react-native';

const Stack = createNativeStackNavigator();
const optionHeaderSign = ({ navigation }) => ({
  headerTransparent: true,
  headerTitle: '',
  headerTintColor: 'white',
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
    <Text className="pr-[20] text-secondaryLight text-[16px] font-extrabold">
      Sign In
    </Text>
  ),
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingScreen"
          component={Landing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={optionHeaderSign}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={optionHeaderSign}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
