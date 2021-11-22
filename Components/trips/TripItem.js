import React from "react"
import { baseURL } from "../../store/instance"
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
} from "native-base"
import tripStore from "../../store/tripStore"

const TripItem = ({ trip, navigation }) => {
  return (
   
      <Stack space={3} alignItems="center">
        <Text>{trip.name}</Text>
    <Box
      maxW="80"
      rounded="lg"
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
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            alt="image"
          />
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
          LONDON
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            My Trip To The UK
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
            Through London's streets and food..
          </Text>
        </Stack>
        <Text fontWeight="400">
         Blah Blah description about trip
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              Nov 22, 2021
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
    </Stack>
  )
}

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
