// Home screen
import React from 'react';
//import react in our code.
import { Text, View } from 'react-native';
//import all the components we are going to use.
 
const FirstPage = ()  =>{
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor:'olive', alignItems: 'center' }}>
        <Text>Home Screden</Text>
      </View>
    );
}

export default FirstPage