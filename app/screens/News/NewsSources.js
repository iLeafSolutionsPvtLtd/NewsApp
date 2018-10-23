import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { connect } from "react-redux";
import * as newsActions from "app/actions/newsActions";
import { Toolbar, Icon } from "react-native-material-ui";
import styles from "./styles";

class NewsSource extends Component {
  sourceFilter = item => {
    this.props.requestNews("bitcoin", item.id);
    this.props.navigation.goBack();
  };
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.sourceFilter(item)}
        style={styles.sourceItem}
      >
        <Text style={styles.sourceText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Toolbar centerElement="News" />
        <FlatList
          data={this.props.dataSource.sources}
          numColumns={1}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.loginReducer.data,
    dataSource: state.loginReducer.dataSource
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onNewsSource: () => dispatch(newsActions.onNewsSource()),
    requestNews: (searchKey, source) =>
      dispatch(newsActions.requestNews(searchKey, source))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsSource);
