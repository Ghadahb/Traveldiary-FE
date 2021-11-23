import React from "react";

import { StyleSheet, Text, View } from "react-native";
import {Box, Heading, HStack,Stack} from "native-base"


import { Button, VStack,
    Image,
    ScrollView,
    Center,
    NativeBaseProvider, } from "native-base";
import Footer from "../footer/Footer";
import TripUpdateModal from "../trips/TripUpdateModal";

const Home = ({ navigation }) => {
  return (
      
    <View>
  <ScrollView px="20">
      <Center mt="3">
        <VStack space={2} alignItems="center" safeAreaTop my={6}>
          { (
            <Image
            width={250}
            height={250}
              resizeMode="cover"
              source={{
                uri: "https://wakingupwild.com/wp-content/uploads/slider-safety-2.jpg",
              }}
              alt={"Alternate Text " }
            />
          )}
        </VStack>
      </Center>
    </ScrollView>
      <Box>
          <Center>
        <Heading size="xl" mb="4">
          Trip
        </Heading>
        <Text fontSize="xl">
          (noun) a journey or excursion, especially for pleasure.
        </Text>
        </Center>
      </Box>
      <Footer navigation={navigation} />
      {/* <Text> Hi </Text> */}

      {/* <Footer navigation={navigation}/> */}
      {/* <Text> Hi </Text> */}
      <Stack space="2" alignItems="center">
      <HStack space="2" alignItems="center">
      <Center>
      <Button
      size="16"
      bg="primary.400:alpha.30"
      rounded="md"
      _text={{
        color: "white",
      }}
        title="NOMAD"
        color="#ffd700"
        width="50"
        height="50"
        onPress={() => navigation.navigate("TripList")}
      >Trip List</Button>
     </Center>
     <Center>
      <Button
      size="16"
      bg="primary.400:alpha.30"
      rounded="md"
      _text={{
        color: "white",
      }}
        title="NOMAD"
        color="#0000ff"
        width="50"
        height="50"
        onPress={() => navigation.navigate("Signin")}
      >Sign in</Button>
      </Center>
      <Center>
            <Button
            size="16"
            bg="primary.400:alpha.30"
            rounded="md"
            _text={{
                color: "white",
              }}
        title="NOMAD"
        color="#0000ff"
        width="50"
        height="50"
        onPress={() => navigation.navigate("ProfileList")}
      >Profile</Button>

      </Center>
     </HStack>
      </Stack>
    </View>
  );
};
// #ffd700
export default Home;

const styles = StyleSheet.create({});
