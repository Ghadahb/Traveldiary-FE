import React, { Component } from "react";
import { IconButton, Icon, ScrollView, HStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { StyleSheet, Text, View, Image } from "react-native";
import { UserProfileUpdate } from "./UserProfileUpdate";

export default function Profile2() {
  const navigation = useNavigation();

  return (
    <ScrollView vertical={true}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />

            <Text style={styles.name}>Abdallah Al Khaldi </Text>
            <Text style={styles.userInfo}>abdallah@gmail.com </Text>
            <Text style={styles.userInfo}>📍Kuwait City </Text>
          </View>
        </View>

        <View>
          <View>
            <IconButton
              icon={
                <Icon
                  as={<MaterialIcons name="house" />}
                  size="sm"
                  color="black"
                  onPress={() => navigation.navigate("Home")}
                />
              }
            />
            <Text>Home</Text>
          </View>
        </View>
        {/* </HStack> */}
        {/* <HStack space="4" alignItems="center"> */}
        <IconButton
          icon={
            <Icon
              as={<FontAwesome name="heart" />}
              size="sm"
              color="black"
              onPress={() => navigation.navigate("Home")}
            />
          }
        />
        <Text>Favorite</Text>
        <View>
          <View>
            <IconButton
              icon={
                <Icon
                  as={<MaterialIcons name="airplanemode-active" />}
                  size="sm"
                  color="black"
                  onPress={() => navigation.navigate("Home")}
                />
              }
            />
            <Text>My Trips</Text>
          </View>
          <View>
            <IconButton
              icon={
                <Icon
                  as={<MaterialIcons name="settings" />}
                  size="sm"
                  color="black"
                  onPress={() => navigation.navigate("UserProfileUpdate")}
                />
              }
            />
            <Text>
              Settings
              {/* <UserProfileUpdate /> */}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
});
