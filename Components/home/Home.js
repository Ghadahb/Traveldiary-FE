import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from "native-base";
import Footer from '../footer/Footer';

const Home = ({ navigation }) => {
    return (
        <View>
            <Footer navigation={navigation}/>
        <Text> Hi </Text>

        </View>
        
    )
}

export default Home

const styles = StyleSheet.create({})
