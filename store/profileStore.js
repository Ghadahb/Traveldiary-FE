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
    } catch (error) {
      console.log(
        "🚀 ~ file: tripStore.js ~ line 16 ~ TripStore ~ createTrip= ~ error",
        error
      );
    }
  };
  



}
  

  const profileStore = new ProfileStore();
  profileStore.fetchProfiles();
  export default profileStore;

