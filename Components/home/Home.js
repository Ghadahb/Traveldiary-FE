import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Box, Heading, HStack, Stack } from "native-base";

import {
  Button,
  VStack,
  Image,
  ScrollView,
  Center,
  NativeBaseProvider,
} from "native-base";
import TripUpdateModal from "../trips/TripUpdateModal";
import authStore from "../../store/authStore";
import { observer } from "mobx-react";
import Footer from "../footer/Footer";

const Home = ({ navigation }) => {
  return (
   
    <View>
      <ScrollView px="20">
        <Center mt="3">
          <VStack space={2} alignItems="center" safeAreaTop my={6}>
          <Footer navigation={navigation}/> 
            {
              
              <Image flex={1} px={3}
                width={250}
                size={150}
                // resizeMode={"contain"}
                borderRadius={100}
                height={250}
                resizeMode="cover"
                source={{
                  uri: "https://wakingupwild.com/wp-content/uploads/slider-safety-2.jpg",
                }}
                alt={"Alternate Text "}
              />
            }
          </VStack>
        </Center>
      </ScrollView>
      
      <Center>
        <Box>
          <Heading size="xl" mb="4">
            Trip

          </Heading>
          <Text fontSize="xl">
            (noun) a journey or excursion, especially for pleasure.
          </Text>
        </Box>
       
      </Center>
      {/* <Footer navigation={navigation} /> */}
      {/* <Text> Hi </Text> */}
    </View>
    
  );
};

export default observer(Home);
