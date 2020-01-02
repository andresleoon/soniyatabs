// Setting screen
import React from 'react';
//import react in our code.
import { Text, View } from 'react-native';
//import all the components we are going to use.
import CarousleComp from '../Swiper';

const SecondPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{height:400, position:"relative",zIndex:10}}>

      {/* <CarousleComp /> */}
      </View>
      <Text>Setting Screen</Text>

    </View>
  );

}

export default SecondPage