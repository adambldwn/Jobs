import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';

import {TopicItem} from '../components';

const topics = [
    {
      id: 0,
      name: 'Java',
      color: 'fb5607'
    },
    {
      id: 1,
      name: 'Python',
      color: '007f5f'
    },
    {
      id: 2,
      name: 'Javascript',
      color: 'ffb703'
    },
    {
      id: 3,
      name: '.NET',
      color: '023e7d'
    },
    {
      id: 4,
      name: 'Dart',
      color: '001845'
    },
    {
      id: 5,
      name: 'Go',
      color: 'f8961e'
    },
    {
      id: 6,
      name: 'Ruby',
      color: 'e63946'
    },
    {
      id: 7,
      name: 'C',
      color: 'fb8b24'
    },
    {
      id: 8,
      name: 'C++',
      color: '06d6a0'
    },
  
  ]

const Introduction = ()=>{
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text>Introduction</Text>
                <ScrollView>
                  {
                    topics.map((t)=>{
                      return <TopicItem key={t.id} item={t} />;
                    })
                  }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export {Introduction};