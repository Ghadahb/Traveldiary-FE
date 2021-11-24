import React from "react";
import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  Spinner,
  Form,
  NativeBaseProvider,
} from "native-base";
import { useState } from "react";
import tripStore from "../../store/tripStore";
import { observer } from "mobx-react";
import authStore from "../../store/authStore";
import { Image, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
// REVIEW: Remove unused imports

const AddButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [trip, setTrip] = useState({
    name: "",
    title: "",
    subtitle: "",
    description: "",
    image: "",
    date: "",
  });

  // REVIEW: Remove commented out code
  //   const handleChange = (event) =>
  //     setTrip({ ...trip, [event.target.name]: event.target.value });

  //   const handleImage = (event) =>
  //     setTrip({ ...trip, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    tripStore.createTrip(trip);
    // handleClose();
  };
  const handleImage = (event) =>
    setTrip({ ...trip, image: event.target.files[0] });

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };

  return (
    <Center flex={1} px="3">
      {/* REVIEW: No need for the fragment */}
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
                <Input onChangeText={(title) => setTrip({ ...trip, title })} />
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

                <FormControl.Label mt="3">Photo</FormControl.Label>

                {/* <Input  */}
                {/* // name="image"
                  // type="file"
                  > */}

                <TouchableOpacity onPress={openImagePickerAsync}>
                  <Text>Pick a photo</Text>
                </TouchableOpacity>
                {/* </Input> */}
                {/* // name="image"
                  // type="file"
                  // // onChange={handleImage}
                  // onChangeText={(image) => setTrip({ ...trip, image })}
                /> */}
              </FormControl>

              <FormControl>
                <FormControl.Label>How long was your trip?</FormControl.Label>
                <Input onChangeText={(date) => setTrip({ ...trip, date })} />
                <FormControl.HelperText>
                  Please use this format: YYYY-MM-DD.
                </FormControl.HelperText>
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
    </Center>
  );
};

export default observer(AddButton);
