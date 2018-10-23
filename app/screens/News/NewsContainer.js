import React, { Component } from "react";
import NewsView from "./NewsView";
import { connect } from "react-redux";
import * as newsActions from "app/actions/newsActions";

class NewsContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.onNewsSource();
    this.props.requestNews("bitcoin", "");
  }

  render() {
    return (
      <NewsView
        {...this.props}
        searchKey={searchKey => this.props.requestNews(searchKey)}
      />
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
)(NewsContainer);
