import React, { Component } from 'react';
import { Linking, Text, Touchable, TouchableOpacity, View } from 'react-native';
import axios from "axios";


export default class MeteorScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            APOD: {},
        };
    }

    componentDidMount() {
        this.getIssLocation()
    }

    getIssLocation = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=EpAgZsFcVxCBQkAjVkRLeTeVoZAayBLdNfTv8VcR")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                    <Text style={styles.titleText}>{this.state.apod.title}</Text>
                    <Text style={styles.routeText}>Astronomy Picture of the Day</Text>
                    <TouchableOpacity style={styles.listContainer}
                    OnPress={()=> Linking.openURL(this.state.apod.url).catch(err=> console.error("Couldn't load page",err))}
                    >
                        <View style={styles.iconContainer}>
                        <Image source={require('../assets/stars.gif')} style={{ height: 50, width: 50 }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
            </ImageBackground>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    listContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    iconContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    infoText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    }
})
