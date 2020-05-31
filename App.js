import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";

export default class extends React.Component {

  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=-${longitude}&APPID=${API_KEY}`
    );
    console.log(data);
  }

  getLocation = async() => {
    
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      console.log(coords);
      this.setState({ isLoading: false });
    }catch(error){
      Alert.alert("Can't find you.", "So sad");
    }

  };

  componentDidmount(){
    this.getLocation();
  }

  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}