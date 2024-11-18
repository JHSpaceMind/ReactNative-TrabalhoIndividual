import { View, StyleSheet, Image } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Footer = () => {
    return (
        <View style={styles.container}>
            <Entypo 
               style={styles.icon}
                name="home" 
                size={24} 
                color="black" 
            />
            <AntDesign 
               style={styles.icon}
                name="search1" 
                size={24}
                color="black" 
            />
            <Image
                style={styles.icon}
                source={require('../../assets/icones/publi.png')} 
            />
            <Image
                style={styles.icon}
                source={require('../../assets/icones/reels.png')} 
            />
            <Image 
                style={styles.user}
                source={require('../../assets/person/user.jpg')} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 16, 
        backgroundColor: '#fff', 
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    icon: {
        height: 28,
        width: 28,
        marginHorizontal: 8,
    },
    user: {
        borderRadius: 30,
        height: 30,
        width: 30,
        marginHorizontal: 8,
    },
});
