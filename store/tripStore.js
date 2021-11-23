import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class TripStore {
  trips = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trip");
      this.trips = response.data;
      this.isLoading = false;
    } catch (error) {
      console.log("TripStore -> fetchTrips -> error", error);
    }
  };

  createTrip = async (newTrip) => {
    try {
      const response = await instance.post("/trip", newTrip);
      this.trips.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateTrip = async (updateTrip, tripId) => {
    try {
      const res = await instance.put(`/trips/${tripId}`, updateTrip);
      this.trips = this.trips.map((trip) =>
        trip._id === tripId ? res.data : trip
      );
    } catch (error) {
      console.log("tripStore -> updateTrip -> error", error);
    }
  };
  
   deleteTrip = async (updateTrip, tripId) => {
  try {
    const res = await instance.put(`/trips/${tripId}`, updateTrip);
    this.trips = this.trips.map((trip) =>
      trip._id === tripId ? res.data : trip
    );
  } catch (error) {
    console.log("tripStore -> updateTrip -> error", error);
  }
};
}
const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;

const styles = StyleSheet.create({});
