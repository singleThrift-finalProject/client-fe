import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FailTransactionScreen from '../screens/FailTransactionScreen';
import PendingTransactionScreen from '../screens/PendingTransactionScreen';
import SuccessTransactionScreen from '../screens/SuccessTransactionScreen';

export default function TransactionMTScreen() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarInactiveTintColor: '#2A2526',
        tabBarActiveTintColor: '#2A2526',
        tabBarIndicatorStyle: {
          backgroundColor: '#EA4C89',
        },
      }}
    >
      <Tab.Screen name="Pending" component={PendingTransactionScreen} />
      <Tab.Screen name="Success" component={SuccessTransactionScreen} />
      <Tab.Screen name="Fail" component={FailTransactionScreen} />
    </Tab.Navigator>
  );
}
