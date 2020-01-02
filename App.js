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
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
//  main App -- some states
//       child with receive()--> props
// seconf child fisrst
// in react native you can manage states ?

const MainComponent = () => {
  const [enable, setEnabled] = React.useState(false);

  return <ChildComponet enable={enable} setEnabled={setEnabled} />;
};

const ChildComponet = ({ enable, setEnabled }) => {
  const TabScreen = createMaterialTopTabNavigator(
    {
      Home: {
        screen: FirstPage,
        params: { isEnable: true },
        style: {
          backgroundColor: "green",
          position: "relative",
          zIndex: 10
        },
        navigationOptions: {
          swipeEnabled: enable
        }
      },
      Settings: { screen: SecondPage }
    },
    {
      tabBarPosition: "top",
      tabBarOptions: {
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#F8F8F8",
        style: {
          backgroundColor: "#633689"
        },
        labelStyle: {
          textAlign: "center"
        },
        indicatorStyle: {
          borderBottomColor: "#87B56A",
          borderBottomWidth: 2
        }
      }
    }
  );

  //making a StackNavigator to export as default
  const App = createStackNavigator({
    TabScreen: {
      screen: TabScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#633689"
        },
        headerTintColor: "#FFFFFF",
        title: "Soniya tabss"
      }
    }
  });
  return <div>hola</div>;
};

export default ChildComponet;
