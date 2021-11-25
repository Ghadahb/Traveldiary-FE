
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Pressable,
    Stack,
  } from "native-base";
  
import React from "react";
import {  StyleSheet, View } from "react-native";
import { baseURL } from "../../store/instance";

const ProfileItem = ({ profile, navigation }) => {
  return (
    <Box
      maxW="80"
      rounded="sm"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
      shadow={"3"}
    >
      <Pressable
        onPress={() => {
          navigation.navigate("Profile", { profile: profile });
          console.log("click");
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{ uri: baseURL + profile.image }} style={{width:100, height:100}} />
          </AspectRatio>
          <Center
            bg="#0000ff"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "#f8f8ff",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {profile.name}
          </Center>
        </Box>
      </Pressable>

      <Stack p="4" space={3}>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              {profile.from}
              {profile.to}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default ProfileItem;


const styles = StyleSheet.create({});