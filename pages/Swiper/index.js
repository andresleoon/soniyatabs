import React from "react";
import Carousel from "react-native-snap-carousel";

import { Dimensions, Image, View, Text, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default class CarousleComp extends React.Component {
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          style={{ width: width, height: 300 }}
          source={{ uri: item.img }}
        />
      </View>
    );
  };

  wp(percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
  }
  render() {
    const entries = [
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
    ];

    const slideWidth = this.wp(75);
    const itemHorizontalMargin = this.wp(2);
    const itemWidth = slideWidth + itemHorizontalMargin * 2;
    console.log(width);
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={entries}
        renderItem={this._renderItem}
        sliderWidth={width}
        useScrollView
        enableMomentum
        swipeThreshold={400}
        disableIntervalMomentum
        containerCustomStyle={{
          backgroundColor: "yellow",
          position: "relative",
          zIndex: 1000
        }}
        itemWidth={itemWidth}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    marginTop: 15,
    position: "relative",
    zIndex: 100,
    overflow: "visible" // for custom animations
  },
  title: {}
});
