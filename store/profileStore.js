import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ProfileStore {

    profiles = [];
    isLoading = true;

    constructor() {
        makeAutoObservable(this);
    }


  fetchProfiles = async () => {
    try {
        const response = await instance.get("/profile"); 
        // check s
        this.profiles = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log("ProfileStore -> fetchProfiles -> error", error);
      }
  };

  createTrip = async (newTrip) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) {
        formData.append(key, newTrip[key]);
      }
      const response = await instance.post("/trips", formData);
      this.trips.push(response.data);
      this.isLoading= false
    } catch (error) {
      console.log(
        "🚀 ~ file: tripStore.js ~ line 16 ~ TripStore ~ createTrip= ~ error",
        error
      );
    }
  };
  
  updateTrip = async (updateTrip, tripId) => {
    try {
      const res = await instance.put(`/trips/${tripId}`, updateTrip);
      this.trips = this.trips.map((trip) =>
        trip._id === updateTrip._id ? res.data : trip
      );
    } catch (error) {
      console.log("tripStore -> updateTrip -> error", error);
    }
  };

  deleteTrip = async ( tripId) => {
    try {
      await api.delete(`/trip/${tripId}`);

      this.trips = this.trips.filter((trip) => trip._id !== tripId);
    } catch (error) {
      console.log(error);
    }
  };
}


  

  const profileStore = new ProfileStore();
  profileStore.fetchProfiles();
  export default profileStore;

