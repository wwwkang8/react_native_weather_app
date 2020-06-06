import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import ProTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#403b4a", "#e7e9bb"],
        title: "Haze",
        subtitle: "It is foggy. Becareful when you drive"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#536976", "#292e49"],
        title: "Thunderstorm",
        subtitle: "Don't go outside"
    },
    Drizzle:{
        iconName: "cloud-drizzle",
        gradient: ["#aa4b6b", "#3b8d99"],
        title: "Drizzle",
        subtitle: "Take raincoat with you when you go outside"
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#a8c0ff", "#3f2b96"],
        title: "Rain",
        subtitle: "Bring umbrella. It is raining"
    },
    Snow:{
        iconName: "weather-snowy-heavy",
        gradient: ["#654ea3", "#eaafc8"],
        title: "Snow",
        subtitle: "Do you want to build a snow man?"
    },
    Atmosphere:{
        iconName: "weather-hail",
        gradient: ["#11998e", "#38ef7d"],
        title: "Atmosphere",
        subtitle: "Go outside to walk around"
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#f12711", "#f5af19"],
        title: "Sunny",
        subtitle: "Weather is good. Enjoy the weather"
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ["#3e5151", "#decba4"],
        title: "Clouds",
        subtitle: "Cloudy weather. good to run"
    },
    Mist:{
        iconName: "weather-hail",
        gradient: ["#1f4037", "#99f2c8"],
        title: "Mist",
        subtitle: "It will be sunny soon."
    },
    Dust:{
        iconName: "weather-hazy",
        gradient: ["#636363", "#a2ab58"],
        title: "Dust",
        subtitle: "Bring your mask to protect from dusty air"
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
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
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
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24

    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});