import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableHighlight
} from "react-native";

import Carousel from "react-native-snap-carousel";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "HOme",
          img: "https://i.imgur.com/UYiroysl.jpg"
        },
        {
          title: "Setting",
          img: "https://i.imgur.com/UPrs1EWl.jpg"
        },
        {
          title: "All",
          img: "https://i.imgur.com/MABUbpDl.jpg"
        }
      ]
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image style={{ width: 66, height: 58 }} source={{ uri: item.img }} />
        <Text style={{ color: "#fff" }}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            this.carousel._snapToItem(this.state.activeIndex - 1);
          }}
        >
          <Image
            style={{ width: 66, height: 58 }}
            source={{ uri: "https://i.imgur.com/MABUbpDl.jpg" }}
          />
        </TouchableHighlight>

        <View>
          <Carousel
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={250}
            itemWidth={250}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })}
          />
        </View>

        <TouchableHighlight
          onPress={() => {
            this.carousel._snapToItem(this.state.activeIndex + 1);
          }}
        >
          <Image source={{ uri: "https://i.imgur.com/MABUbpDl.jpg" }} />
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#131420",
    alignItems: "center",
    justifyContent: "center"
  }
});
