import React from "react";
import Home from "../home/Home";
import Signin from "../authentication/Signin";
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import Signup from "../authentication/Signup";
import Profile from "../user/Profile";
import TripList from "../trips/TripList";
import ProfileList from "../profile/ProfileList";
import AddButton from "../trips/AddButton";
import TripDetail from "../trips/TripDetail";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="TripDetail">
      <Screen name="Home" component={Home} oprtions={{ headerShown: false }} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Profile" component={Profile} />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route, navigation }) => {
          const trip = route.params.trip;
          return {
            title: trip.name,
          };
        }}
      />

      <Screen
        name="TripList"
        component={TripList}
        options={() => ({
          headerRight: () => <AddButton />,
        })}
      />

      <Screen name="ProfileList" component={ProfileList} />
    </Navigator>
  );
};

export default RootNavigator;
