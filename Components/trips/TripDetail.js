
import { observer } from "mobx-react";
import { Spinner } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tripStore from "../../store/tripStore";
import { View, Text } from "react-native";
import TripUpdateModal from "./TripUpdateModal";

const TripDetail = ({ route, navigation }) => {
  if (tripStore.isLoading) return <Spinner />;

  //   const { _trip } = route.params;
  //   const trip = tripStore.trips.find ((trip) => trip._id === _trip);

    const trip  = route.params.trip;

  return (
    <View>
      <Text>Hii</Text>

      <Text>{trip.name}</Text>
      <TripUpdateModal />

    </View>
  );

export default observer(TripDetail);

