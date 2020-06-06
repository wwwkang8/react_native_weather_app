import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProTypes from "prop-types";

export default function Weather({temp, condition}){
    return (
        <View style ={styles.container}>
            <Text>{temp}</Text>
            <Text>{condition}</Text>
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
    }
});