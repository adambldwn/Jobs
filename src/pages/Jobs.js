import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const Jobs = (props)=>{
    const {selectedLanguage} = props.route.params;

    const fetchData = async ()=>{
        const response = await axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`);
    }

    useEffect(()=>{
        fetchData()
    },[])
    return(
        <SafeAreaView>
            <View>
                <Text>Jobs</Text>
                <Text>{selectedLanguage}</Text>
            </View>
        </SafeAreaView>
    )
}

export {Jobs};