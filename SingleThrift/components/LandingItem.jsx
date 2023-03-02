import { StyleSheet, Text, View, Image, useWindowDimensions, ImageBackground, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

export default function LandingItem({item, navigation}){
    const { width } = useWindowDimensions()

    return(
        <View style={[styles.container, {width}]}>
        <ImageBackground source={{uri:item.bgImage}} blurRadius={6} resizeMode="cover" style={styles.bg}>
            <View style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                <Image source={{uri: item.logo}} style={[styles.image, { resizeMode: 'contain'}]}/>
                {item.id === 3 ? 
                    <TouchableOpacity
                        title="go to Home"
                        onPress={() => navigation.navigate("BottomTab")}
                        style={styles.button}
                        > 
                    
                        <Text style={styles.buttonText}>Start It! <Ionicons name="arrow-forward" size={25} color="white"/></Text>
                    </TouchableOpacity> : <Text style={styles.slideText}> Slide Left   <Ionicons name="arrow-forward" size={25} color="#5FD068"/></Text>
                }
                <View style={{flex: 0.3}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        </ImageBackground> 
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
        flex: 1,
        width: 180,
        height: 180,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#fff',
        textAlign: 'center'
    },
    description: {
        fontWeight: '300',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 64
    },
    bg: {
        width: "100%",
        height: "100%"
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 90,
        backgroundColor: 'green',
        marginTop: 50,
        marginBottom: 20   
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: "700"
    },
    slideText: {
        color: "#5FD068",
        fontSize: 18
    }
});