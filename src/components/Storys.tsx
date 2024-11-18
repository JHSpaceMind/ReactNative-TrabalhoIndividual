import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Storys = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <View style={styles.simpleBorder}>
                    <Image 
                        style={styles.user}
                        source={require('../../assets/person/user.jpg')} 
                    />
                </View>
                <View style={styles.iconBackground}>
                    <AntDesign
                        name="pluscircle"
                        size={23}
                        color="cornflowerblue"
                    />
                </View>
            </View>
            <LinearGradient
                colors={['#4A55C3', '#D62976', '#FA7E1E', '#FEDA75']}
                style={styles.gradientBorder}
            >
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.person}
                        source={require('../../assets/person/person1.jpg')}
                    />
                </View>
            </LinearGradient>
            <LinearGradient
                colors={['#4A55C3', '#D62976', '#FA7E1E', '#FEDA75']}
                style={styles.gradientBorder}
            >
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.person}
                        source={require('../../assets/person/person2.png')}
                    />
                </View>
            </LinearGradient>
            <LinearGradient
                colors={['#4A55C3', '#D62976', '#FA7E1E', '#FEDA75']}
                style={styles.gradientBorder}
            >
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.person}
                        source={require('../../assets/person/person3.png')}
                    />
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
    },
    userContainer: {
        position: 'relative',
    },
    simpleBorder: {
        padding: 2,
        borderRadius: 32,
        marginHorizontal: 8,
        borderWidth: 2,
        borderColor: 'green',
    },
    gradientBorder: {
        padding: 2,
        borderRadius: 70,
        marginHorizontal: 8,
    },
    imageContainer: {
        padding: 3,
        borderRadius: 60,
        backgroundColor: 'white',
    },
    person: {
        borderRadius: 60,
        height: 60,
        width: 60,
    },
    user: {
        borderRadius: 60,
        height: 60,
        width: 60,
    },
    iconBackground: {
        position: 'absolute',
        top: 40, 
        right: 0,
        width: 30, 
        height: 30, 
        borderRadius: 19, 
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
