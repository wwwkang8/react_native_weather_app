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

  getWeather = async (latitude, longitude) => {

    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=-${longitude}&appid=${API_KEY}&units=metric`);
  
    console.log(data);
    
  };

  getLocation = async () => {
    
    try{

      console.log("---------------------------------");
      await Location.requestPermissionsAsync();

      const dataObject = await Location.getCurrentPositionAsync();

      this.getWeather(dataObject.coords.latitude, dataObject.coords.longitude);
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