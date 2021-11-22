import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
        // check s
        this.trips = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log("TripStore -> fetchTrips -> error", error);
      }
  };
}
  

  const tripStore = new TripStore();
  tripStore.fetchTrips();
  export default tripStore;

const styles = StyleSheet.create({})
