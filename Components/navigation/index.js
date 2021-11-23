import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "../home/Home";
import Signin from "../authentication/Signin";
import { createStackNavigator } from "@react-navigation/stack";

import Signup from '../authentication/Signup';
import Profile from '../user/Profile';
import TripList from '../trips/TripList';
import TripStore from '../../store/tripStore';
import ProfileList from '../profile/profileList';
import TripUpdateModal from '../trips/TripUpdateModal';
import TripDetail from '../trips/TripDetail';
import AddButton from "../trips/AddButton";


const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} oprtions={{ headerShown: false }} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Profile" component={Profile} />
      <Screen
        name="TripList"
        component={TripList}
        options={() => ({
          headerRight: () => <AddButton />,
        })}
      />


    return (
       <Navigator
       initialRouteName="TripDetail">
           <Screen name="Home" component={Home}
        //    oprtions={{ headerShown: false }}
           />
           <Screen name ="Signin" component={Signin} />
               <Screen name="Signup" component={Signup} />
            <Screen name="Profile" component={Profile} />
            <Screen name="TripList" component={TripList} />
           <Screen name="ProfileList" component={ProfileList}/>
       <Screen name="TripDetail" component={TripDetail}/>
       </Navigator>
    );

      <Screen name="ProfileList" component={ProfileList} />
    </Navigator>
  );

};

export default RootNavigator;

const styles = StyleSheet.create({});
