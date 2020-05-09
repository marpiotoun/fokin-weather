import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons, Ionicons, Feather, Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const conditionObject = {
    "Thunderstorm":{
        icon: <Ionicons name="ios-thunderstorm" size={120} color="white" />,
        caption: "Good day to be chicken",
        gradient: {
            from:"#0F2027",
            to:"#f7797d",
        },
    },
    "Drizzle":{
        icon: <Feather name="cloud-drizzle" size={120} color="white" />,
        caption: "How about listen calm music?",
        gradient: {
            from:"#aa4b6b",
            to:"#3b8d99",
        },
    },
    "Rain":{
        icon: <Ionicons name="ios-rainy" size={120} color="white" />,
        caption: "Don't forget to take umbrella",
        gradient: {
            from:"#aa4b6b",
            to:"#3b8d99",
        },
    },
    "Snow":{
        icon: <Ionicons name="ios-snow" size={120} color="white" />,
        caption: "Let it go~",
        gradient: {
            from:"#6DD5FA",
            to:"#FFFFFF",
        },
    },
    "Mist":{
        icon: <Fontisto name="fog" size={120} color="white" />,
        caption: "If you drive out, be careful!",
        gradient: {
            from:"#aa4b6b",
            to:"#3b8d99",
        },
    },
    "Smoke":{
        icon: <Fontisto name="fog" size={120} color="white" />,
        caption: "If you drive out, be careful!",
        gradient: {
            from:"#aa4b6b",
            to:"#3b8d99",
        },
    },
    "Haze":{
        icon: <Fontisto name="day-haze" size={120} color="white" />,
        caption: "If you drive out, be careful!",
        gradient: {
            from:"#aa4b6b",
            to:"#3b8d99",
        },
    },
    "Dust":{
        icon: <MaterialCommunityIcons name="weather-cloudy-alert" size={120} color="white" />,
        caption: "Wear a mask!",
        gradient: {
            from:"#aa4b6b",
            to:"#3b8d99",
        },
    },
    "Fog":{
        icon: <Fontisto name="fog" size={120} color="white" />,
        caption: "If you drive out, be careful!",
        gradient: {
            from:"#aa4b6b",
            to:"#3b8d99",
        },
    },
    "Sand":{
        icon: <MaterialCommunityIcons name="weather-cloudy-alert" size={120} color="white" />,
        caption: "Wear a mask!",
        gradient: {
            from:"#aa4b6b",
            to:"#3b8d99",
        },
    },
    "Ash":{
        icon: <MaterialCommunityIcons name="weather-cloudy-alert" size={120} color="white" />,
        caption: "Wear a mask!",
        gradient: {
            from:"#aa4b6b",
            to:"#3b8d99",
        },
    },
    "Squall":{
        icon: <MaterialCommunityIcons name="weather-cloudy-alert" size={120} color="white" />,
        caption: "squirrel?",
        gradient: {
            from:"#0F2027",
            to:"#f7797d",
        },
    },
    "Tornado":{
        icon: <MaterialCommunityIcons name="weather-tornado" size={120} color="white" />,
        caption: "Run!",
        gradient: {
            from:"#0F2027",
            to:"#f7797d",
        },
    },
    "Clear":{
        icon: <MaterialCommunityIcons name="weather-sunny" size={120} color="white" />,
        caption: "Shall we go picnic?",
        gradient: {
            from:"#6dd5ed",
            to:"#2193b0",
        },
    },
    "Clouds":{
        icon: <MaterialCommunityIcons name="weather-cloudy" size={120} color="white" />,
        caption: "Do you know the fact that your face burn more when cloudy day",
        gradient: {
            from:"#536976",
            to:"#BBD2C5",
        },
    },
}
export default function Weather({temp, condition}){
    const selectedWeather = conditionObject[condition];
    return(
    <View style={styles.container}>
        <LinearGradient
            colors={[selectedWeather.gradient.from, selectedWeather.gradient.to]}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: "100%",
            }}
        />
        <StatusBar barStyle="light-content"/>
        <View style={styles.iconBox}>
            <Text style={styles.icon}>
                {selectedWeather.icon}
            </Text>
            <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={styles.detailBox}>
            <Text style={{fontSize:30, marginBottom: 10}}>It's {condition}</Text>
            <Text style={{fontSize:20}}>{selectedWeather.caption}</Text>
        </View>
        
    </View>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow",
        "Atmosphere",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tormado",
        "Clear",
        "Clouds"
    ]).isRequired,
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    iconBox:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
    },
    temp: {
        color: "white",
        fontSize: 40,
    },
    detailBox:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
