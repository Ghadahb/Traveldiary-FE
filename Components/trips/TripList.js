
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TripItem from './TripItem';
import tripStore from '../../store/tripStore';
import { observer } from 'mobx-react-lite';
import { ScrollView, VStack, Stack, Heading, Center } from "native-base";

const TripList = ({ navigation }) => {
    const tripList = tripStore.trips.map((trip) => ( 
        <TripItem navigation={navigation} trip={trip} key={trip._id} /> 
            ));
        return (
            
        <ScrollView>
            <Center>
        <VStack space="2.5" mt="4">
          <Heading size="md">Travel Diaries</Heading>
          <Stack 
          direction="row" 
          mb="2.5" 
          mt="1.5" 
          space={3}
          rounded="sm"
          shadow={"3"}
          >
          {tripList}
           
                </Stack>
                </VStack>
                </Center>
            </ScrollView>
            
        );
        
        
            
        
    };


export default observer(TripList);

const styles = StyleSheet.create({});

// testing
