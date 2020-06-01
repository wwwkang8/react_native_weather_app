import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";

const API_KEY = "e4b4a1b8fc6d98a4d7b3f4a0eb9702e8";

export default class extends React.Component {

  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=-${longitude}&APPID=${API_KEY}&units=metric`
    );
    console.log(data);
  };

  getLocation = async () => {
    
    try{

      await Location.requestPermissionsAsync();

      const coords = await Location.getCurrentPositionAsync();
      
      console.log(coords);

      this.setState({ isLoading: false });

    }catch(error){

      Alert.alert("Can't find you.", "So sad");

    }

  };
  

  componentDidMount(){
    this.getLocation();
  };

  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}