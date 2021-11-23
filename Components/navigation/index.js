import React from "react";
import Home from "../home/Home";
import Signin from "../authentication/Signin";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../authentication/Signup";
import Profile from "../user/Profile";
import TripList from "../trips/TripList";
import ProfileList from "../profile/profileList";
import TripDetail from "../trips/TripDetail";
import AddButton from "../trips/AddButton";
import { observer } from "mobx-react";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} oprtions={{ headerShown: false }} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Profile" component={Profile} />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ navigation, route }) => {
          const { trip } = route.params;
          return {
            title: trip.name,
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
      <Screen name="ProfileList" component={ProfileList} />
    </Navigator>
  );
};

export default observer(RootNavigator);
