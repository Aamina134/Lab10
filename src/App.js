import { Provider } from "react-redux";
import React, { Component } from "react";
import store from "./store";
import RestaurantScreen from "./components/RestaurantScreen";

export default function App() {
  return (
    <Provider store={store}>
      <RestaurantScreen />
    </Provider>
  );
}
