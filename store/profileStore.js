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
        this.profiles = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log("ProfileStore -> fetchProfiles -> error", error);
      }
  };


  
  updateProfile = async (updatedProfile) => {
    try {
      const res = await instance.put(`/profile/me}`, updatedProfile);
      this.trips = this.trips.map((profile) =>
        this.profiles._id === updatedProfile._id ? res.data : profile
      );
    } catch (error) {
      console.log( error);
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

