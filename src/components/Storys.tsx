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
                <Text style={styles.label}>Seu story</Text>
                <View style={styles.iconBackground}>
                    <AntDesign
                        name="pluscircle"
                        size={23}
                        color="cornflowerblue"
                    />
                </View>
            </View>
            <View style={styles.storyContainer}>
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
                <Text style={styles.label}>michele.cat</Text>
            </View>
            <View style={styles.storyContainer}>
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
                <Text style={styles.label}>kanna.twt</Text>
            </View>
            <View style={styles.storyContainer}>
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
                <Text style={styles.label}>cecilia.ss</Text>
            </View>
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
        alignItems: 'center',
        marginHorizontal: 8,
    },
    storyContainer: {
        position: 'relative',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    simpleBorder: {
        padding: 2,
        borderRadius: 42, 
        borderWidth: 3,
        borderColor: 'green',
    },
    gradientBorder: {
        padding: 3,
        borderRadius: 80, 
    },
    imageContainer: {
        padding: 3,
        borderRadius: 70, 
        backgroundColor: 'white',
    },
    person: {
        borderRadius: 70, 
        height: 80, 
        width: 80,  
    },
    user: {
        borderRadius: 70,
        height: 80, 
        width: 80,  
    },
    iconBackground: {
        position: 'absolute',
        top: 60, 
        right: 0,
        width: 30, 
        height: 30, 
        borderRadius: 15, 
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        marginTop: 5,
        fontSize: 12,
        color: 'black',
    },
});
