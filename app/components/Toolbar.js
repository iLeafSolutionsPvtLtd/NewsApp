import React, { Component } from "react";
import { View, Text, FlatList, Image, Dimensions } from "react-native";
import { Toolbar } from "react-native-material-ui";
import IconToggle from "react-native-vector-icons/Feather";
const { width } = Dimensions.get("window");
export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  filterNews = () => {
    this.props.navigation.navigate("NewsSource");
  };
  render() {
    return (
      <View style={{ width }}>
        <Toolbar
          centerElement="News"
          leftElement={
            <IconToggle
              name="filter"
              color="#ffffff"
              size={20}
              onPress={this.filterNews}
            />
          }
          style={{
            container: { paddingLeft: 10 }
          }}
          searchable={{
            autoFocus: false,
            placeholder: "Search",
            onChangeText: text => this.setState({ search: text }),
            onSubmitEditing: () => this.props.searchKey(this.state.search)
          }}
        />
      </View>
    );
  }
}
