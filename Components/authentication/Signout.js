import { observer } from "mobx-react";
import { Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import authStore from "../../store/authStore";
import navigation from "../navigation";

const Signout = ({ navigation }) => {
  return (
    <View>
      {/* REVIEW: Better way to write it: !authStore.user ?  */}
      {authStore.user === null ? (
        <Button
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          Signin
        </Button>
      ) : (
        <View>
          <Text>welcome {authStore.user.username}</Text>
          <Button onPress={authStore.signOut}>logout</Button>
        </View>
      )}
    </View>
  );
};

export default observer(Signout);
