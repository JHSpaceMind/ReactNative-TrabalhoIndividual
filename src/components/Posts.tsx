import { Text, View, StyleSheet, Image } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Posts = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image 
                        style={styles.user}
                        source={require('../../assets/person/person1.jpg')} 
                    />
                    <Text style={styles.username}>michele.cat</Text>
                </View>
                <Feather 
                    name="more-vertical"
                    size={24}
                    color="black"
                />
            </View>

            <Image 
                style={styles.post}
                source={require('../../assets/post/post2.jpg')} 
            />

            <View style={styles.reactionsContainer}>
                <AntDesign
                    name="hearto"
                    size={24} 
                    color="black"
                    style={styles.icon} 
                />
                <Ionicons 
                    name="chatbubble-outline"
                    size={24}
                    color="black"
                    style={styles.icon}
                />
                <Feather 
                    name="send"
                    size={24} 
                    color="black"
                    style={styles.icon}
                />
                <Image
                    style={styles.favIcon}
                    source={require('../../assets/icones/fav.png')}
                />
            </View>
            <Text style={styles.likesText}>
                curtido por <Text style={styles.boldText}>espiral.png</Text> e <Text style={styles.boldText}>outras pessoas</Text>
            </Text>
            <Text style={styles.likesText}>
                <Text style={styles.boldText}>michele.cat</Text> 🌟foto antiga,quando eu tinha cabelo escuro naquela prainha
                <Text style={styles.italicText}>...mais</Text>
            </Text>
            <Text style={styles.commentsText}>
                <Text style={styles.italicText}>Ver todos os 200 comentários</Text>
            </Text>
            <View style={styles.commentSection}>
                <Image 
                    style={styles.user}
                    source={require('../../assets/person/user.jpg')} 
                />
                <Text style={styles.italicText}>Adicione um comentário</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '100%',
        paddingHorizontal: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        borderRadius: 15,
        height: 30,
        width: 30,
    },
    username: {
        marginLeft: 8, 
        fontSize: 13,
        color: 'black',
    },
    moreIcon: {
        marginRight: 10,
    },
    post: {
        height: 300,
        width: '100%',
        marginVertical: 10,
    },
    reactionsContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 2,
    },
    icon: {
        marginHorizontal: 5, 
    },
    favIcon: {
        height: 26,
        width: 22,
        marginLeft: 240, 
    },
    likesText: {
        marginLeft: 10,
        marginTop: 5,
        fontSize: 14,
        color: 'black',
    },
    boldText: {
        fontWeight: 'bold',
    },
    italicText: {
        color: 'grey',
        marginLeft: 3,
    },
    commentsText: {
        marginLeft: 10,
        marginTop: 2,
        fontSize: 14,
        color: 'black',
    },
    commentSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
    },
});

