import { useFonts } from 'expo-font';
import { Text, View, StyleSheet, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export const Navbar = () => {
    let [fontsLoaded] = useFonts({
        'Settikef-PersonalUse': require('../../assets/fonts/Settikef-PersonalUse.otf'),
    });

    if (!fontsLoaded) {
        return <Text>Carregando...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.TextLog}> Instagram </Text>
            <View style={styles.iconContainer}>
                <AntDesign
                    style={styles.iconHeart}
                    name="hearto"
                    size={24} 
                    color="black" 
                />
                <Image
                    style={styles.iconChat}
                    source={require('../../assets/icones/chat.png')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal:'auto',
        marginTop: 23,
        width:'97%',
       
    },
    TextLog: {
        fontFamily: 'Settikef-PersonalUse', 
        fontSize: 27,
        color: '#000',
        paddingTop: 28,
        paddingRight: 180,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 28,
    },
    iconChat: {
        width: 31,
        height: 31,
        paddingBottom:10,
        marginLeft: 9,
    },
    iconHeart: {
        marginLeft: 20,
    },
});
