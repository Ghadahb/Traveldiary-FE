import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Components/home/Home";
import RootNavigator from "./Components/navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import Profile from "./Components/user/Profile";
import Travels from "./Components/trips/TripItem";
import Footer from "./Components/footer/Footer";


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NativeBaseProvider>
      
      <NavigationContainer>
        {/* <Home /> */}
        {/* <Footer /> */}
        <Footer />
        <RootNavigator />


      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
