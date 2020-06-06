import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import ProTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#403b4a", "#e7e9bb"]
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#536976", "#292e49"]
    },
    Drizzle:{
        iconName: "cloud-drizzle",
        gradient: ["#aa4b6b", "#3b8d99"]
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#a8c0ff", "#3f2b96"]
    },
    Snow:{
        iconName: "weather-snowy-heavy",
        gradient: ["#654ea3", "#eaafc8"]
    },
    Atmosphere:{
        iconName: "weather-hail",
        gradient: ["#11998e", "#38ef7d"]
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#f12711", "#f5af19"]
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ["#3e5151", "#decba4"]
    },
    Mist:{
        iconName: "weather-hail",
        gradient: ["#1f4037", "#99f2c8"]
    },
    Dust:{
        iconName: "weather-hazy",
        gradient: ["#636363", "#a2ab58"]
    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
              <StatusBar barStyle="light-content"/>
            <View style = {styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName} 
                    color="white"/>
                <Text style={styles.temp}>{temp}도</Text>
            </View>
            <View style={styles.halfContainer}/>
        </LinearGradient>
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
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});