
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TripItem from "./TripItem";
import tripStore from "../../store/tripStore";
import { observer } from "mobx-react-lite";
import { Spinner } from "native-base";
import AddButton from "./AddButton";

const TripList = ({ navigation }) => {
  if (tripStore.isLoading) return <Spinner />;

  const tripList = tripStore.trips.map((trip) => (
    <TripItem navigation={navigation} trip={trip} key={trip._id} />
  ));
  return <View>{tripList}</View>;
};


export default observer(TripList);

const styles = StyleSheet.create({});

// testing
