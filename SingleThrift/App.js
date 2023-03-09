import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./stores";
import Appholder from "./Appholder";
// import jeane start
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native/dist/Auth";
import { useEffect } from "react";
import { getUser } from "./src/graphql/queries";
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });
import { createUser } from "./src/graphql/mutations";
// import jeane end
function App() {
  useEffect(() => {
    const syncUser = async () => {
      // get Auth user
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      // console.log(authUser, "ini data auth user ");
      // query db using Auth user id reverse to data we need
      const userData = await API.graphql(
        graphqlOperation(getUser, { id: authUser.attributes.sub })
      );
      // console.log(userData, "ini user Data");
      // if there is  user in db
      if (userData.data.getUser) {
        console.log(userData.data.getUser, "ini datanya user skrg");
        console.log("user already exist in db");
        return;
      }

      const newUser2 = {
        id: authUser.attributes.sub,
        // name : authUser.attributes.phone_number ,
        name: "jane doe",
        // image: "",
        status: "Hey, there!",
      };

      console.log(newUser2, " data user baru");
      // find or create if there is no users db, (create one)
      const newUserResponse = await API.graphql(
        graphqlOperation(createUser, { input: newUser2 })
      );
    };
    syncUser();
  }, []);
  return (
    <Provider store={store}>
      <Appholder></Appholder>
    </Provider>
  );
}
export default withAuthenticator(App);
