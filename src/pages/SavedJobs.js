import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { JobItem } from '../components'

const SavedJobs = ()=>{
    const [jobList, setJobList] = useState([])

    AsyncStorage.getItem("@SAVED_JOBS")
    .then(res => {
        const list = JSON.parse(res);
        setJobList(list);
    })

    return(
        <SafeAreaView>
            <View>
                <FlatList
                    data={jobList}
                    renderItem={({item}) => <JobItem job={item}/>}
                />
            </View>
        </SafeAreaView>
    )
}

export {SavedJobs};