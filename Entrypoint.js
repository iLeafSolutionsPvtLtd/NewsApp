import React, { Component } from "react";
import { ActivityIndicator, Button } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { createStackNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";
import configureStore from "./src/store/configureStore";
import Intro from "./src/screens/Intro";

import Ionicons from "react-native-vector-icons/Ionicons";

const { persistor, store } = configureStore();
// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: Home
//   },

//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;

//         return (
//           <Ionicons
//             name={`ios-options${focused ? "" : "-outline"}`}
//             size={horizontal ? 20 : 25}
//             color={tintColor}
//           />
//         );
//       }
//     }),
//     tabBarOptions: {
//       activeTintColor: "tomato",
//       inactiveTintColor: "gray"
//     }
//   }
// );

const App = createStackNavigator(
  {
    Intro: { screen: Intro }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default class Entrypoint extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
