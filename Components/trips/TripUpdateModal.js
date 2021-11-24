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

const TripUpdateModal = ({trip}) => {
  const [showModal, setShowModal] = useState(false);
  const [newtrip, setTrip] = useState({
      name: trip.name, 
    }
);
const handleUpdate = () => {
  tripStore.updateTrip(trip._id, newtrip);
  console.log(trip._id);
};
  //   const handleChange = (event) =>
  //     setTrip({ ...trip, [event.target.name]: event.target.value });

  //   const handleImage = (event) =>
  //     setTrip({ ...trip, image: event.target.files[0] });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   tripStore.updateTrip(trip);
  //   // handleClose();
  // };
 

  return (
    <Center flex={1} px="3">
      <>
        <Button onPress={() => setShowModal(true)}>Update</Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Update your Trip</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Title</FormControl.Label>
                <Input onChangeText={(name) => setTrip({ ...trip, name })} />
              </FormControl>
              {/* <FormControl mt="3"> */}
                {/* <FormControl.Label>Photo</FormControl.Label>
                <Input
                  name="image"
                  type="file"
                  onChangeText={(image) => setTrip({ ...trip, image })}
                />
              </FormControl> */}
            </Modal.Body>

            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button onPress={handleUpdate}>save</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    </Center>
  );
};

export default observer(TripUpdateModal);