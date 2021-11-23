import React from "react";
import { View, Text } from "react-native";
import TripUpdateModal from "./TripUpdateModal";
import tripStore from "../../store/tripStore";

const TripDetail = ({ navigation }) => {
  const tripDetail = tripStore.trips.filter((trip) => (
    <TripItem navigation={navigation} trip={trip} key={trip._id} />
  ));
  return (
    <View>
      <TripUpdateModal tripDetail={tripDetail} />
    </View>
  );
};

export default TripDetail;
