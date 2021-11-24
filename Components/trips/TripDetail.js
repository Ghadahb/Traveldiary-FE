import { observer } from "mobx-react";
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
  Button,
  Spinner,
} from "native-base";
import React from "react";
import { Pressable } from "react-native";
// import { Text, View } from "react-native";
import { baseURL } from "../../store/instance";
import tripStore from "../../store/tripStore";
import TripUpdateModal from "./TripUpdateModal";

const TripDetail = ({ route }) => {
  if (tripStore.isLoading) {
    return <Spinner />;
  }
  const handleDelete = (tripId) => {
    tripStore.deleteTrip(tripId);
  };

  const { trip } = route.params;
  //   const trip = tripStore.trips.find ((trip) => trip._id === trip);

  return (

    <Box
      maxW="100%"
      rounded="sm"
      overflow="hidden"
      borderColor="coolGray.200"
      marginLeft="0"
      marginRight="0"
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
        <Button
          mt="2"
          colorScheme="indigo"
          onPress={handleDelete}
          backgroundColor="#0000ff"
        >
          Delete
        </Button>
      </Box>

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
  
  );
};

export default observer(TripDetail);
