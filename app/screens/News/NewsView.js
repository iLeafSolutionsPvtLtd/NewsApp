import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import ToolBar from "../../components/Toolbar";
import NewsItems from "./NewsItems";
import styles from "./styles";
var { height, width } = Dimensions.get("window");

class NewsView extends Component {
  _renderItem = ({ item }) => {
    return <NewsItems item={item} />;
  };

  render() {
    console.log("data here", this.props.data);
    return (
      <View style={styles.container}>
        <ToolBar {...this.props} />
        <View style={styles.component}>
          <FlatList
            data={this.props.data}
            extraData={this.props}
            numColumns={1}
            renderItem={this._renderItem}
          />
        </View>
      </View>
    );
  }
}

export default NewsView;
