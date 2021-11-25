import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


function Footer () {
    const navigation = useNavigation();

  return (
    <>
      <StatusBar
        backgroundColor="#3700B3"
        barStyle="light-content"
        margin-top="50"
        width= "window"
      />

      <Box
        safeAreaTop
        backgroundColor="#6200ee"
        w="400"
        margin-top="5"
        mt="-9"
      />
      {/* <VStack space={4} flex={8} ></VStack> */}

      <HStack
        bg="#6200ee"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space="4" alignItems="center">
          <IconButton
            icon={
              <Icon
                size="sm"
                as={<MaterialIcons name="menu" />}
                color="white"
              />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack space="2">
          <IconButton
            icon={
              <Icon
                as={<MaterialIcons name="airplanemode-active" />}
                size="sm"
                color="white"
                onPress={() => navigation.navigate("TripList")}
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={<FontAwesome name="heart" />}
                color="white"
                size="sm"
              />
            }
          />
          <IconButton
            icon={
              <Icon as={<FontAwesome name="user" />} size="sm" color="white"
              onPress={() => navigation.navigate("Profile")}
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Footer />
    </NativeBaseProvider>
  );
}
