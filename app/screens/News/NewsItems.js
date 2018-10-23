import React, { Component } from "react";
import { View, Text, FlatList, Image, Dimensions } from "react-native";
import { Toolbar } from "react-native-material-ui";
import styles from "./styles";

export default class NewsItems extends Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: item.urlToImage
          }}
        />
        <View style={styles.itemComponent}>
          <Text numberOfLines={3}>{item.publishedAt}</Text>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text numberOfLines={3}>{item.description}</Text>
        </View>
      </View>
    );
  }
}
