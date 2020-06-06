import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({temp}){
    return (
        <View style ={styles.container}>
            <View style = {styles.halfContainer}>
                <MaterialCommunityIcons size={96} name="weather-lightning-rainy"/>
                <Text style={styles.temp}>{temp}도</Text>
            </View>
            <View style={styles.halfContainer}/>
        </View>
        );
}

Weather.propTypes = {
    temp:ProTypes.number.isRequired,
    condition: ProTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 36
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});