import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import dayjs from "dayjs";
import realtiveTime from "dayjs/plugin/relativeTime";
import { getCommonChatRoomWithUser } from "../services/chatRoomService.js";
import { useEffect, useState } from "react";
dayjs.extend(realtiveTime);

const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [chatRoom, setChatRoom] = useState(chat.id);

  // console.log(chat, "isi chatt");
  // loop through chat.user.items and find a user thats not us (Authenticated user)
  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      const userItem = chat.Users.items.find(
        (item) => item.user.id !== authUser.attributes.sub
      );
      setUser(userItem?.user);
    };

    fetchUser();
  }, []);

  const goToChat = () => {
    navigation.navigate("Chat", {
      id: chatRoom,
      name: user?.name,
    });
  };
  return (
    <Pressable onPress={goToChat} style={styles.container}>
      {/* <Text>ChatListItem</Text> */}
      <Image
        source={{
          uri: chat.user?.image,
          //   uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        {/* Row */}
        <View style={styles.row}>
          <Text style={styles.name}>{user?.name}</Text>
          {/* <Text style={styles.subTitle}>
            {dayjs(chat.LastMessage?.createdAt).fromNow(true)}
          </Text> */}
        </View>
        <Text>{chat.LastMessage?.text}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: "lightgray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    flex: 1,
  },
  subTitle: {
    color: "grey",
  },
});

export default ChatListItem;
