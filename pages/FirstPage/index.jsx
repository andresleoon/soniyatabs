// Home screen
import React from "react";
import { State, LongPressGestureHandler } from "react-native-gesture-handler";
import { NavigationContext } from "react-navigation";

import { NavigationEvents } from "react-navigation";

//import react in our code.
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight
} from "react-native";
//import all the components we are going to use.
import CarousleComp from "../Swiper";
// import Slider from "../../components/slider";
const FirstPage = props => {
  const { navigation } = props;
  const navigationC = React.useContext(NavigationContext);
  console.log(props, "props from firstPage");

  // console.log(navigation.state, "statu swipe");
  // navigation.setParams({
  //   navigationOptions: {
  //     swipeEnabled: false
  //   }
  // });
  // React.useEffect(() => {
  //   navigation.setParams({
  //     style: {
  //       backgroundColor: "green",
  //       position: "relative",
  //       zIndex: 10
  //     },
  //     navigationOptions: params => {
  //       return {
  //         swipeEnabled: false,
  //         tabBarOnPress: (previousScreen, jumpToIndex) => {
  //           console.log(previousScreen, "preview", jumpToIndex);
  //           // navigation.navigate('UserDetails', { data: Math.floor(Math.random() * 100) + 1 });
  //         }
  //       };
  //     }
  //   });
  // }, []);
  return (
    <View
      removeClippedSubviews={false}
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "olive",
        alignItems: "center",
        position: "relative"
      }}
    >
      <NavigationEvents
        onWillFocus={payload => console.log("will focus", payload)}
        onDidFocus={payload => console.log("did focus", payload)}
        onWillBlur={payload => console.log("will blur", payload)}
        onDidBlur={payload => console.log("did blur", payload)}
      />
      <TouchableHighlight
        onPress={() => {
          console.log("pressing");
          navigation.setParams({
            navigationOptions: {
              swipeEnabled: true
            }
          });
        }}
      >
        <Text>toque aqui</Text>
      </TouchableHighlight>
      <View
        style={{ height: 400, position: "relative", zIndex: 1000, top: 10 }}
      >
        <CarousleComp />
      </View>
      {/* <View style={{ height: 400, position: "relative", zIndex: 100 }}>
        <Text>Home Screen</Text>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#131420",
    alignItems: "center",
    position: "relative",
    zIndex: 1000,
    justifyContent: "center"
  }
});

export default FirstPage;
