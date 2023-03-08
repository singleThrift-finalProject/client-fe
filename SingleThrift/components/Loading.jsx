import { View, Image, Text } from 'react-native';

export default function Loading() {
  return (
    <>
      <View className="flex justify-center items-center w-full h-full">
        <Image
          className="h-[100] w-[100]"
          source={{
            uri: 'https://cdn.discordapp.com/attachments/1078712407863595140/1082812266409373726/7dngh6.gif',
          }}
        />
        <Text
          className="text-lg pt-[20]"
          style={{
            fontFamily: 'Inter_900Black',
          }}
        >
          Single Thrift
        </Text>
      </View>
    </>
  );
}
