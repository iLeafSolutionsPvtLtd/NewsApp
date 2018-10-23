import { createStackNavigator } from "react-navigation";

import News from "app/screens/News";
import NewsSource from "app/screens/News/NewsSources";

const RNApp = createStackNavigator(
  {
    News: {
      screen: News,

      navigationOptions: { header: null, gesturesEnabled: false }
    },
    NewsSource: {
      screen: NewsSource,
      navigationOptions: { header: null, gesturesEnabled: false }
    }
  },
  {
    initialRouteName: "News"
  }
);

export default RNApp;
