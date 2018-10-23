import { StyleSheet, Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  component: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  sourceText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  },

  sourceItem: {
    backgroundColor: "white",
    elevation: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: height / 8,
    width: width - 20,
    margin: 5,
    justifyContent: "center"
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    elevation: 1,
    borderRadius: 5,
    padding: 10,
    height: height / 4,
    width: width - 20,
    margin: 5,
    justifyContent: "center"
  },
  itemComponent: {
    flex: 2,
    marginLeft: 10
  },
  icon: {
    flex: 1,
    resizeMode: "cover"
  },
  title: {
    marginTop: 10,
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  }
});

export default styles;
