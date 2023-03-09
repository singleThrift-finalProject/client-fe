import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";

import Message from "../../components/Message";
import InputBox from "../../components/InputBox";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getChatRoom, listMessagesByChatRoom } from "../../src/graphql/queries";
import { onCreateMessage } from "../../src/graphql/subscriptions";

const ChatScreen = () => {
  const [chatRoom, setChatRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const chatroomID = route.params.id;
  // console.log(chatroomID, "ini chatroom ID");
  // console.log(route, "ini isi routenyaa");

  // fetch Chat Room
  useEffect(() => {
    API.graphql(graphqlOperation(getChatRoom, { id: chatroomID })).then(
      (result) => setChatRoom(result.data?.getChatRoom)
    );
  }, []);

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  // fetch Messages
  useEffect(() => {
    API.graphql(
      graphqlOperation(listMessagesByChatRoom, {
        chatroomID,
        sortDirection: "DESC",
      })
    ).then((result) => {
      setMessages(result.data?.listMessagesByChatRoom?.items);
    });

    // subscription to new messages
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: ({ value }) => {
        // console.log('NEW MSG')
        // console.log(value)
        setMessages((m) => [value.data.onCreateMessage, ...m]);
      },
      error: (err) => {
        console.log(err);
      },
    });
    return () => subscription.unsubscribe();
  }, [chatroomID]);
  if (!chatRoom) {
    return <ActivityIndicator />;
  }
  // console.log(chatRoom.Messages.items, "chatROOOM");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 110}
      style={styles.bg}
    >
      <View style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={{ padding: 10 }}
          inverted
        />
        <InputBox chatroom={chatRoom} />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "grey",
  },
});
export default ChatScreen;
