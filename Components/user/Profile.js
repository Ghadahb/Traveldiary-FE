import React from "react";
import { Avatar, HStack, Center, NativeBaseProvider } from "native-base";
import { Card, Icon } from "react-native-elements";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Profile = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <HStack space={8}>
          <Avatar
            bg="blue.500"
            alignSelf="left"
            height="100"
            width="100"
            size="xl"
            borderWidth="3"
            source={{
              uri: "ymyeEJzT.png",
            }}
          >
            GB
          </Avatar>
        </HStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default Profile;

const styles = StyleSheet.create({});
