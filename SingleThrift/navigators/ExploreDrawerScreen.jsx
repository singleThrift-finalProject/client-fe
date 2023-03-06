import { createDrawerNavigator } from '@react-navigation/drawer';
import ExploreStackScreen from './ExploreStackScreen';

export default function ExploreDrawerScreen() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Feed"
        component={ExploreStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
