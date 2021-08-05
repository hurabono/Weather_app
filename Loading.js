import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function Loader() {
  return (
    <LinearGradient style={styles.container}
    colors={['#a18cd1', '#fbc2eb']}
    style={styles.container}
    >
            <StatusBar barStyle="dark-content" />

            <View style={styles.container}>
                        <MaterialCommunityIcons
                      name="account-heart-outline"
                      size={100}
                      color="white"
                      justifyContent= "center"
                      alignItems = "center"
                      textAlign = "center"
                      marginBottom = {20}
                    />
                  <Text style={styles.loadText}>I am checking the today's weather now! ⛅</Text>
            </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  loadText: {
    fontSize: 26,
    textAlign: "center",
    color: "#fff",
  },
});

export default Loader;
