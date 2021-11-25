import React from "react"
import {
  Popover,
  Button,
  Input,
  FormControl,
  Box,
  Center,
  NativeBaseProvider,
  View,
  ScrollView
} from "native-base"
import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';

export function UserProfileUpdate() {

const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
    
                quality: 1,
            });
    
            if (!result.cancelled) {
                const localUri = result.uri;
                const filename = localUri.split("/").pop();
                const match = /.(\w+)$/.exec(filename);
                const image = {
                    uri: localUri,
                    name: filename,
                    type: `match ? image/${match[1]} : image`,
                };
                setTrip({ ...trip, image: image });
            }
        } catch (error) {
            console.log(error);
        }
};

  const initialFocusRef = React.useRef(null)
  return (

    <Box 
    h="60%" 
    w="60%" 
    alignItems="center"
    marginTop="-200"
    >
       
      <Popover
        initialFocusRef={initialFocusRef}
        trigger={(triggerProps) => {
          return <Button {...triggerProps}>Edit My Info</Button>
        }}
      >

        <Popover.Content width="56"
        size="sm"
        >
          <Popover.Arrow />
          <Popover.CloseButton />
          {/* @ts-ignore */}
          <Popover.Header>Personal Details</Popover.Header>
         
          <Popover.Body>
              
          <ScrollView
    vertical={true} 
    >
            <FormControl>
              <FormControl.Label
                _text={{
                  fontSize: "xs",
                  fontWeight: "medium",
                }}
              >
                First Name
              </FormControl.Label>
              <Input
                rounded="sm"
                fontSize="xs"
                backgroundColor="white"
                ref={initialFocusRef}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label
                _text={{
                  fontSize: "xs",
                  fontWeight: "medium",
                }}
              >
                Last Name
              </FormControl.Label>
              <Input rounded="sm" fontSize="xs" backgroundColor="white" />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label
                _text={{
                  fontSize: "xs",
                  fontWeight: "medium",
                }}
              >
                Bio
              </FormControl.Label>
              <Input rounded="sm" fontSize="xs" backgroundColor="white"/>
            </FormControl>

            <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    
                  }}
                >
                  <Button

                    title="Pick an image from camera roll"
                    onPress={pickImage}
                    mt="3"
                  >
                    PHONE GALLERY
                    </Button>
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 10, height: 200 }}
                      
                    />
                  )}
                </View>
                </ScrollView>
                
          </Popover.Body>
          <Popover.Footer>
            <Button.Group>
              <Button colorScheme="coolGray" variant="ghost">
                Cancel
              </Button>
              <Button>Save</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
        
      </Popover>
    </Box>
    
   
    
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <UserProfileUpdate />
      </Center>
    </NativeBaseProvider>
  )
}
