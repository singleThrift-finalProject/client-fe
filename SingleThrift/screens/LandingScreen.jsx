import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import SpecifiedView from '../components/SpecifiedView';

export default function LandingScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SpecifiedView className="bg-white h-full">
      <ImageBackground
        className="h-[400]"
        source={require('../assets/images/landing-screen-bg.png')}
      />
      <Image
        className="h-[68] w-[68] absolute right-[30] top-[50]"
        source={require('../assets/images/logo.png')}
      ></Image>
      <Text
        className="text-[32px] text-center py-[60] px-[30] text-primary"
        style={{
          fontFamily: 'Inter_900Black',
        }}
      >
        Sell your valuable <Text className="text-secondary">goods</Text> with
        fun
      </Text>

      <View className="flex px-[30] gap-[30]">
        <TouchableOpacity
          className="py-[20] rounded-3xl bg-primary shadow-lg shadow-primary"
          onPress={() => navigation.push('SignUpScreen')}
        >
          <Text
            className="text-[14] text-center text-secondaryLight"
            style={{
              fontFamily: 'Inter_900Black',
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-[20] rounded-3xl bg-secondaryLight shadow-lg shadow-secondary"
          onPress={() => navigation.push('SignInScreen')}
        >
          <Text
            className="text-[14] text-center text-secondary"
            style={{
              fontFamily: 'Inter_900Black',
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SpecifiedView>
  );
}
