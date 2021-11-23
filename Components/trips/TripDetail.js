import { observer } from "mobx-react";
import { Spinner, Image } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import { baseURL } from "../../store/instance";
import tripStore from "../../store/tripStore";
import TripUpdateModal from "./TripUpdateModal";

const TripDetail = ({ route }) => {
  if (tripStore.isLoading) {
    return <Spinner />;
  }
  const {trip} = route.params;
//   const trip = tripStore.trips.find ((trip) => trip._id === trip);

  return (
    <View>
      <Text>Hii</Text>

      <Text>{trip.name}</Text>
      <Image
        source={{ uri: baseURL + trip.image }}
        style={{ width: "50", height: "50" }}
      />
      <TripUpdateModal />
    </View>
  );
};

export default observer(TripDetail);
