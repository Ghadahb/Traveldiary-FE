
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TripItem from './TripItem';
import tripStore from '../../store/tripStore';
import { observer } from 'mobx-react-lite';
import { ScrollView, Title, VStack, Stack, HStack, Heading, Center, ChevronLeftIcon, SwipeRow, Button, ChevronRightIcon, AddIcon } from "native-base";
import authStore from '../../store/authStore';

const TripList = ({ navigation }) => {
    const tripList = tripStore.trips.map((trip) => ( 
        <TripItem navigation={navigation} trip={trip} key={trip._id} /> 
            ));
        return (
          
        <ScrollView
        vertical={true} 
        >
        <Center>
        <HStack space="2.5" mt="4" maxW="100%">
          <Stack 
          maxW="100%"
          direction="column" 
          marginLeft="0"
          marginRight="0"
    //   borderWidth="0.5"
          mb="2.5" 
          mt="1.5" 
          space={3}
          rounded="sm"
          shadow={"5"}
          >
          {tripList}
                </Stack>
                </HStack>
                </Center>
            </ScrollView>
            
        );
        
        
            
        
    };


export default observer(TripList);

const styles = StyleSheet.create({});

// testing
