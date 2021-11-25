import React, { Component } from "react";
import { IconButton, Icon, ScrollView, HStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { StyleSheet, Text, View, Image } from "react-native";
import { UserProfileUpdate } from "./UserProfileUpdate";

export default function Profile3() {
  const navigation = useNavigation();

  return (
    <ScrollView vertical={true}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://media.discordapp.net/attachments/912020704076107806/913369323354087444/image0.png?width=618&height=1079",
            }}
          />

          <Text style={styles.name}>Amnah Alduhaileb </Text>
          <Text style={styles.userInfo}>amnah@gmail.com </Text>
          <Text style={styles.userInfo}>📍Kuwait City </Text>
        </View>
      </View>

      <HStack
        bg="white"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space="4" alignItems="center">
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
          {/* <Text >Home</Text> */}
        </HStack>
        <HStack space="3" alignItems="center">
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
          {/* <Text>Favorite</Text> */}
        </HStack>

        <HStack space="4" alignItems="center">
          <IconButton
            icon={
              <Icon
                as={<MaterialIcons name="airplanemode-active" />}
                size="sm"
                color="black"
                onPress={() => navigation.navigate("TripList")}
              />
            }
          />
          {/* <Text>My Trips</Text> */}
        </HStack>

        <HStack space="1" alignItems="center">
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
          {/* <Text>
            Settings
            <UserProfileUpdate />
          </Text>  */}
        </HStack>


      </HStack>
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
