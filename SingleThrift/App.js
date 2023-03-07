import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './stores';
import Appholder from './Appholder';

export default function App() {
  return (
    <Provider store={store}>
      <Appholder></Appholder>
    </Provider>
  );
}
