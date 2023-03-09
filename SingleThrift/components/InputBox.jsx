import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createMessage, updateChatRoom } from "../src/graphql/mutations";
const InputBox = ({ chatroom }) => {
  // console.log(chatroom, "ini isi di input box");
  // state data
  const [newMessage, setNewMessage] = useState("");
  const onSend = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    // console.warn("Send a new message: ", newMessage);
    const sendMessage = {
      chatroomID: chatroom.id,
      text: newMessage,
      userID: authUser.attributes.sub,
    };
    const newMessageData = await API.graphql(
      graphqlOperation(createMessage, { input: sendMessage })
    );
    setNewMessage("");

    // console.log(chatroom._version, "ini verr");
    // console.log(newMessageData.data.createMessage.id, "id new msg");
    // console.log(chatroom.id, "idnya crr");
    // set new msg as last msg so they can be in bottom of chat screen
    await API.graphql(
      graphqlOperation(updateChatRoom, {
        input: {
          _version: chatroom._version,
          chatRoomLastMessageId: newMessageData.data.createMessage.id,
          id: chatroom.id,
        },
      })
    );
  };
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput
        style={styles.input}
        placeholder="type your message ... "
        value={newMessage}
        onChangeText={setNewMessage}
        multiline
      />
      <MaterialIcons
        style={styles.send}
        name="send"
        size={24}
        color="white"
        onPress={onSend}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    alignItems: "center",
  },
  input: {
    fontSize: 18,

    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});
export default InputBox;
