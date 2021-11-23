import React from "react";
import { baseURL } from "../../store/instance";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  ScrollView,
  VStack,
} from "native-base";
import tripStore from "../../store/tripStore";
import { Pressable } from "react-native";

const TripItem = ({ trip, navigation }) => {
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
          navigation.navigate("TripDetail"
          , { trip: trip }
          );
          console.log("click");
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{ uri: baseURL + trip.image }} alt="image" />
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
            {trip.name}
          </Center>
        </Box>
      </Pressable>

      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {trip.title}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "#0000ff",
            }}
            _dark={{
              color: "#0000ff",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            {trip.subtitle}
          </Text>
        </Stack>
        <Text fontWeight="400">{trip.description}</Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              {trip.from}
              {trip.to}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
    // </Pressable>

    // </Center>
    // </Stack>
    // </VStack>
    // </ScrollView>
  );
};

export default TripItem;

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="3">
//         <Example />
//       </Center>
//     </NativeBaseProvider>
//   )
// }
