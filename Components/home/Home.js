
   
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
   
    <View >
      <ScrollView px="20">
        <Center mt="3">
          <VStack space={2} alignItems="center" safeAreaTop my={6}>
              
          <Footer navigation={navigation}/> 

          {/* <Footer navigation={navigation}/>  */}

            {
             <View  style={{ marginTop: 50}}> 
              <Image flex={1} px={3}
                width={250}
                // size={150}
                resizeMode={"contain"}
                borderRadius={70}
                height={150}
                resizeMode="cover"
                source={{
                  uri: "https://wallpapercave.com/wp/wp2003951.jpg",
                }}
                alt={"Alternate Text "}
              />
              </View>
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