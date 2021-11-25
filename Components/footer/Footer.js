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
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import authStore from "../../store/authStore";
import { observer } from "mobx-react";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        // backgroundColor="#3700B3"
        // barStyle="light-content"
        // margin- ="50"
        // width="window"
      />

      <Box
        safeAreab
        backgroundColor="#6200ee"
        w="400"
        margin-top="5"
        mt="-9"
      />
      {/* <VStack space={4} flex={8} ></VStack> */}

      <HStack
        bg="#7dd3fc"
        px="1"
        py="3"
        marginBottom="5"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space="4" alignItems="center">
          {/* <IconButton
            icon={
              <Icon
                size="sm"
                as={<MaterialIcons name="menu" />}
                color="white"
              />
            }
          /> */}
          {authStore.user !== null ? (
            <Text fontSize="20"> {`Hi ${authStore.user.username}`}</Text>
          ) : (
            <Pressable>
              <Text
                color="white"
                fontSize="20"
                fontWeight="bold"
                onPress={() => navigation.navigate("Home")}
              >
                NOMAD 
              </Text>
            </Pressable>
          )}
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
              <Icon as={<FontAwesome name="heart" />} color="white" size="sm" />
            }
          />
          <IconButton
            icon={
              <Icon
                as={<FontAwesome name="user" />}
                size="sm"
                color="white"
                onPress={() => navigation.navigate("Profile")}
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
};
export default observer(Footer);

// export default function () {
//   return (
//     <NativeBaseProvider>
//       <Footer />
//     </NativeBaseProvider>
//   );
// }
