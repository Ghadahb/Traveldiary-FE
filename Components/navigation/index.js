import React from "react";
import Home from "../home/Home";
import Signin from "../authentication/Signin";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";
import Signup from "../authentication/Signup";
import Profile from "../user/Profile";
import TripList from "../trips/TripList";
import TripStore from "../../store/tripStore";
import ProfileList from "../profile/ProfileList";
import TripUpdateModal from "../trips/TripUpdateModal";
import TripDetail from "../trips/TripDetail";
import AddButton from "../trips/AddButton";
import authStore from "../../store/authStore";
import { Button } from "native-base";
import Signout from "../authentication/Signout";
// REVIEW: Remove unused imports

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        // Typo
        oprtions={{
          headerShown: false,
        }}
      />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      {/* REVIEW: Since the component is commented out, comment it here as well, it might cause issues */}
      <Screen name="Map" component={Map} />

      <Screen
        name="ProfileList"
        component={ProfileList}
        options={({ navigation }) => ({
          title: "Users",
          headerRight: () => <Signout navigation={navigation} />,
        })}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={({ navigation, route }) => ({
          //   const { profile } = route.params;
          //   return {
          // title: profile.name,
          headerRight: () => <Signout navigation={navigation} />,
          //   };
        })}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ navigation, route }) => {
          const { trip } = route.params;
          return {
            title: trip.name,
            headerRight: () => <Signout navigation={navigation} />,
          };
        }}
      />

      <Screen
        name="TripList"
        component={TripList}
        options={() => ({
          title: "Explore",
          headerRight: () => <AddButton />,
        })}
      />
      {/* <Screen
        name="TripUpdate"
        component={TripList}
        options={() => ({
          headerRight: () => <TripUpdateModal />,
        })}
      /> */}
    </Navigator>
  );
};

export default observer(RootNavigator);
