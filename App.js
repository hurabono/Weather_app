import React, { useEffect, useState } from "react";
import { Alert, Text, StyleSheet } from "react-native";
import Loading from "./Loading";
import Weather from "./weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "abcfa806c85262535d70a4b55d65cdff";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [temp, setData] = useState(null);
  const [condition, setCondition] = useState(null);

  useEffect(() => {
    const getWeather = async (latitude, longitude) => {
      const {
        data: {
          main: { temp },
          weather,
        },
      } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
      setData(temp);
      setCondition(weather[0].main);
      setLoading(false);
    };

    const getLocation = async () => {
      try {
        const response = await Location.requestForegroundPermissionsAsync();
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
        getWeather(latitude, longitude);
        
      } catch (error) {
        Alert.alert("bad Status", "위치를 찾을 수 없습니다.");
      }
    };
    getLocation();
  }, []);
  console.log(condition);
  return isLoading ? (
    <Loading />
  ) : (
    <Weather temp={Math.round(temp)} condition={condition} />
  );
}
