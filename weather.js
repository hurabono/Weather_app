import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#2b5876", "#4e4376"],
    title: "Haze",
    subtitle: "Foggy weather today!",
    description: "If you drive car, Please be careful. Haze makes you blind now!",
    mention: "no accident is the best thing in our life👍"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#536976", "#292E49"],
    title: "Lightning",
    subtitle: "Look at the window, lightning today. ⚡",
    description: "Even if thundar and lighting made you scared, Don't be. Listening fun music! ",
    mention: "How about staying at home?👍"
  },
  Drizzle: {
    iconName: "weather-pouring",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
    title: "Drizzle",
    subtitle: "Drizzle Drizzle 💧",
    description: "Take an umbrella If you got cold easier than others. But I do not want to take an umbrella today..!",
    mention: "Under my umbrella, ella, ella, eh, eh, eh☂️"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
    title: "Shower",
    subtitle: "Opps! Pouring now! ☔",
    description: "Be careful If you are going to work. I will watch movie and eat delicious food",
    mention: "Under my umbrella, ella, ella, eh, eh, eh☂️"
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#C9D6FF", "#E2E2E2"],
    title: "Snow",
    subtitle: "Snowing today! ❄",
    description: "omg.. snowing outside! Be careful If do you go out..! ",
    mention: "Enjoy the christmas mood!  ❄"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#1c92d2", "#f2fcfe"],
    title: "Clear",
    subtitle: "Ohh! very sunny today! ☀",
    description: "Let's go to workout or enjoy picinc with friends at the park!! ",
    mention: "Enjoy your day! 👍"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#00416A", "#E4E5E6"],
    title: "Cloudy",
    subtitle: "Cool weather today 😊",
    description: " oh, good weather to take walk but becareful chilly night! 🧥",
    mention: "Enjoy your day! 👍"
  },
  Dust: {
    iconName: "weather-hazy",
    gradient: ["#FF8235", "#30E8BF"],
    title: "Dust",
    subtitle: "Ew..? Dusty today",
    description: " Look so weired. no fresh air today. Mask required! ",
    mention: "I think today we should stay at home 👍"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#2b5876", "#4e4376"],
    title: "Mist",
    subtitle: "Mist today ",
    description: " My face feels fresh today! but a little muggy",
    mention: "Mist will not go to be longer. Enjoy your day! 👍"
  },
};
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOption[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOption[condition].iconName}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
        <Text style={styles.title}>{weatherOption[condition].title}</Text>

      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
        <Text style={styles.description}>{weatherOption[condition].description}</Text>
        <Text style={styles.mention}>{weatherOption[condition].mention}</Text>                                
      </View>

    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Dust",
    "Mist",
  ]),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 42,
    textAlign: "center",
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "300",
    textAlign: "center"
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  weahter: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
    marginTop: 30,
  },
  halfContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 200
  },
  textContainer: {
      flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 152,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center"
  },
  description: {
      fontSize: 20,
      textAlign: "center",
      color: "#fff",
      marginTop: 30,
  },
  mention:{

      fontSize: 18,
      textAlign: "center",
      color: "#fff",
      marginTop: 40,
  }

});
