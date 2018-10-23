import "react-native";
import React from "react";
import NewsView from "../screens/News/NewsView";
import NewsItems from "../screens/News/NewsItems";
import ApiConstants from "../api/ApiConstants";
import { api } from "../api";
import mock_data from "../mock/news";
import item from "../mock/item";
import renderer from "react-test-renderer";

jest.mock("react-native-vector-icons/Feather", () => ({
  ToolbarAndroid: "ToolbarAndroid"
}));

it("renders correctly", () => {
  const tree = renderer.create(<NewsItems item={item} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Should load Routes", () => {
  global.fetch = jest.fn(
    () =>
      new Promise(resolve => {
        resolve({ status: 201, json: () => mock_data });
      })
  );

  return api("", "").then(data1 => {
    expect(data1).toBeDefined();
    expect(data1.status).toEqual("ok");
  });
});
