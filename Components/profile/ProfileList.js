import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import authStore from "../../store/authStore";
import profileStore from "../../store/profileStore";
import SearchBar from "./SearchBar";
import tripStore from "../../store/tripStore";
import Profile2 from "../user/Profile2";
import Profile3 from "../user/Profile3";

const ProfileList = () => {

  const profileList =profileStore.profiles.map((profile) => (
    <profileItem profile={profile} key={profile._id} />
  ));
// function({trip}){

  return (
    <View>
        
        {/* <Text>checking</Text> */}
        <SearchBar 
        onChange={(event) => setQuery(event.target.name)}
        />
        <Profile3 />
        <Profile2 />
      {/* <Text>{profileList}</Text> */}

    </View>
  );
};


export default observer(ProfileList);

const styles = StyleSheet.create({});
