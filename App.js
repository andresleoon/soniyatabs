//This is an example of React Native Tab
// import React from 'react';
//import react in our code.
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createMaterialTopTabNavigator,
//  createAppContainer,
//} from 'react-navigation';
 
//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
 
const TabScreen = createMaterialTopTabNavigator(
  {
    Home: { screen: FirstPage },
    Settings: { screen: SecondPage },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);
 
//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#633689',
      },
      headerTintColor: '#FFFFFF',
      title: 'Soniya tabss',
    },
  },
});
export default createAppContainer(App);