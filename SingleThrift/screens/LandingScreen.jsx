import { StyleSheet, View, FlatList } from "react-native";
import landItem from "../landItem";
import LandingItem from "../components/LandingItem";
import SpecifiedView from "../components/SpecifiedView";

export default function Landing({ navigation }) {

    return (
        <SpecifiedView>
            <View style={styles.container}>
                <FlatList
                    data={landItem}
                    renderItem={({ item }) => <LandingItem navigation={navigation} item={item} />}
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SpecifiedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});