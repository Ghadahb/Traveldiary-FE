import React from "react";
import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  View
} from "native-base";
import tripStore from "../../store/tripStore";
import { observer } from "mobx-react";
import authStore from "../../store/authStore";

import { Image, Text, TouchableOpacity } from "react-native";
import  { useState, useEffect } from 'react';

import {  Platform } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

const AddButton = () => {
    // const _pickImage = async () => {
    //     try {
    //         let result = await ImagePicker.launchImageLibraryAsync({
    //             mediaTypes: ImagePicker.MediaTypeOptions.All,
    //             allowsEditing: true,
    //             aspect: [4, 3],
    
    //             quality: 1,
    //         });
    
    //         if (!result.cancelled) {
    //             const localUri = result.uri;
    //             const filename = localUri.split("/").pop();
    //             const match = /.(\w+)$/.exec(filename);
    //             const image = {
    //                 uri: localUri,
    //                 name: filename,
    //                 type: match ? image/${match[1]} : image,
    //             };
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
  
  
    const [showModal, setShowModal] = useState(false);

  const [trip, setTrip] = useState({
    name: "",
    title: "",
    subtitle: "",
    description: "",
    image: "",
    date: "",
  });

  const handleClose = () => setShowModal(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    tripStore.createTrip(trip);
    handleClose();
  };

  //   const openImagePickerAsync = async () => {
  //     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  //     if (permissionResult.granted === false) {
  //       alert("Permission to access camera roll is required!");
  //       return;
  //     }

  //     let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //     console.log(pickerResult);
  //   }
  
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


  return (
    <View>
    <Center flex={1} px="3">
      {authStore.user !== null ? (
        <>
          <Button onPress={() => setShowModal(true)} backgroundColor="#0000ff">
            +
          </Button>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header>Add A Trip</Modal.Header>
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>Which City?</FormControl.Label>
                  <Input onChangeText={(name) => setTrip({ ...trip, name })} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Title</FormControl.Label>
                  <Input
                    onChangeText={(title) => setTrip({ ...trip, title })}
                  />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Subtitle</FormControl.Label>
                  <Input
                    name="subtite"
                    onChangeText={(subtitle) => setTrip({ ...trip, subtitle })}
                  />
                </FormControl>
                <FormControl mt="3">
                  <FormControl mt="3">
                    <FormControl.Label>Description</FormControl.Label>
                    <Input
                      name="description"
                      onChangeText={(description) =>
                        setTrip({ ...trip, description })
                      }
                    />
                    <FormControl.HelperText>
                      250 character limit.
                    </FormControl.HelperText>
                  </FormControl>

                <FormControl>
                  <FormControl.Label mt="3">How long was your trip?</FormControl.Label>
                  <Input onChangeText={(date) => setTrip({ ...trip, date })} 
                  />
                  <FormControl.HelperText>
                    Please use this format: YYYY-MM-DD.
                  </FormControl.HelperText>
                </FormControl>


                <FormControl.Label mt="3">Photo</FormControl.Label>

                {/* <Input  */}
                {/* // name="image"
                  // type="file"
                  > */}
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
                    backgroundColor="#0000ff"
                   
                    
                  >
                    PHONE GALLERY
                    </Button>
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 200, height: 200 }}
                    />
                  )}
                </View>

                {/* <TouchableOpacity onPress={openImagePickerAsync} >
                    <Text >Pick a photo</Text>
                  </TouchableOpacity> */}
                {/* </Input> */}
                {/* // name="image"

                  // type="file"
                  // // onChange={handleImage}
                  // onChangeText={(image) => setTrip({ ...trip, image })}
                /> */}
                </FormControl>

              </Modal.Body>

              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    // variant="ghost"
                    onPress={() => {
                      setShowModal(false);
                    }}
                    backgroundColor="#0000ff"
                  >
                    Cancel
                  </Button>
                  <Button onPress={handleSubmit} backgroundColor="#0000ff">
                    Save
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </>
      ) : (
        <Button  >
          +
        </Button>
        // onPress={TripCreateAlert}
      )}
    </Center>
    </View>
  );
};

export default observer(AddButton);