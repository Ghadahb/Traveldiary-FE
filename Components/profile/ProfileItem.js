


import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileItem = ({ profile }) => {
  return (
    <View>
      <Text>checking</Text>

      <Text>{profile.name}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({});