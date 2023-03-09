import { Text, Image, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { getCommonChatRoomWithUser } from "../services/chatRoomService.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { createChatRoom, createChatRoomUser } from "../src/graphql/mutations";

dayjs.extend(relativeTime);

const ContactListItem = ({ user, selectable = false, isSelected = false }) => {
  const navigation = useNavigation();
  //   console.log(user, "ini data user");
  const onPress = async () => {
    console.warn("Pressed");
    // check if we already have a chatRoom with user
    const existingChatRoom = await getCommonChatRoomWithUser(user.id);

    if (existingChatRoom) {
      navigation.navigate("Chat", { id: existingChatRoom.chatRoom.id });
      console.log(existingChatRoom.chatRoom.id, "ini chat room");
      return;
    }
    // add the clicked user to the chatRoom
    const newChatRoomData = await API.graphql(
      graphqlOperation(createChatRoom, { input: {} })
    );
    console.log(newChatRoomData, "INI NEW CHAT ROOM");

    if (!newChatRoomData.data?.createChatRoom) {
      console.log("Error creating the chat error");
    }

    const newChatRoom = newChatRoomData.data?.createChatRoom;

    // add the clicked user to the chatRoom
    await API.graphql(
      graphqlOperation(createChatRoomUser, {
        input: { chatRoomId: newChatRoom.id, userId: user.id },
      })
    );

    // add the auth user to Chatroom
    const authUser = await Auth.currentAuthenticatedUser();
    await API.graphql(
      graphqlOperation(createChatRoomUser, {
        input: { chatRoomId: newChatRoom.id, userId: authUser.attributes.sub },
      })
    );

    // navigate to newly chat room
    navigation.navigate("Chat", { id: newChatRoom.id });
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {user?.name}
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}>
          {user?.status}
        </Text>
      </View>
      {selectable &&
        (isSelected ? (
          <AntDesign name="checkcircle" size={24} color="royalblue" />
        ) : (
          <FontAwesome name="circle-thin" size={24} color="lightgray" />
        ))}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});

export default ContactListItem;
