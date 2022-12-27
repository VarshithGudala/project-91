import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Platform,
    StatusBar
} from "react-native";

export default class Informal_LetterScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Types Of Writing Skills</Text>
                </View>

                <ScrollView>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("creative writing")
                    }>
                        <Text style={styles.routeText}>Creative Writing</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("journalistic")
                    }>
                        <Text style={styles.routeText}>Journalistic Writing</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("diar")
                    }>
                        <Text style={styles.routeText}>Diary Entry </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("paragraph")
                    }>
                        <Text style={styles.routeText}> Paragraph Writing </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("speech")
                    }>
                        <Text style={styles.routeText}> Speech Writing </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("technique")
                    }>
                        <Text style={styles.routeText}> Technical Writing </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("science")
                    }>
                        <Text style={styles.routeText}> Scientific Research</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard}
                        onPress={() =>
                            this.props.navigation.navigate("Home")
                        }
                    >
                        <Image source={require("../assets/back.png")} style = {{width:80 , height:80}}/>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
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
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "white"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    },
    routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 80,
        width: 80,
        resizeMode: "contain"
    }
});