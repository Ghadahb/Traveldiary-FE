import React from "react";

import { StyleSheet, Text, View, Box, Heading } from "react-native";



import { Button } from "native-base";
import Footer from "../footer/Footer";

const Home = ({ navigation }) => {

  return (
    <View>

      {/* <Box>
        <Heading size="xl" mb="4">
          Trip
        </Heading>
        <Text fontSize="xl">
          (noun) a journey or excursion, especially for pleasure.
        </Text>
      </Box> */}
      <Footer navigation={navigation} />
      {/* <Text> Hi </Text> */}
      <Button title="NOMAD" color="#0000ff" onPress={() => alert("WELCOME")} />

      {/* <Footer navigation={navigation}/> */}
      {/* <Text> Hi </Text> */}
      <Button
        title="NOMAD"
        color="#0000ff"
        width="50"
        height="50"
        onPress={() => navigation.navigate("TripList")}
      >Trip List</Button>
      <Button
        title="NOMAD"
        color="#0000ff"
        width="50"
        height="50"
        onPress={() => navigation.navigate("Signin")}
      >Sign in</Button>
            <Button
        title="NOMAD"
        color="#0000ff"
        width="50"
        height="50"
        onPress={() => navigation.navigate("ProfileList")}
      >Profile</Button>


      {/* <Button 
             title="signin"
             onPress={() => navigation.navigate("Signin")}
             /> */}
    </View>
  );
};


export default Home;

const styles = StyleSheet.create({});
