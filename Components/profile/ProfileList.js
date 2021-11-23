import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import authStore from "../../store/authStore";
import profileStore from "../../store/profileStore";
import SearchBar from "./SearchBar";

const ProfileList = () => {
  const profileList =profileStore.profiles.map((profile) => (
    <profileItem profile={profile} key={profile._id} />
  ));

  return (
    <View>
        <SearchBar/>
        <Text>checking</Text>
      <Text>{profileList}</Text>
    </View>
  );
};




export default observer(ProfileList);

const styles = StyleSheet.create({});
