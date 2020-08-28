import "react-native-gesture-handler";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WebView from "react-native-webview";

const Drawer = createDrawerNavigator();

const WebViewScreen = (props) => {
  return (
    <WebView
      source={{
        html:
          "<div style='font-size: 40'>Dolore occaecat ex deserunt est officia incididunt excepteur elit laborum. Enim cillum voluptate amet tempor aliquip labore adipisicing eiusmod culpa commodo anim eu magna. Ad reprehenderit nulla laborum laborum Lorem veniam culpa pariatur consectetur incididunt veniam cillum minim. Excepteur veniam commodo labore laborum aute pariatur excepteur fugiat enim ullamco ut deserunt ea. Anim laboris anim anim Lorem aliquip aute. Dolor elit do aliqua consectetur laboris officia Lorem Lorem ut id officia dolor tempor.</div>>",
      }}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          key={"webview"}
          name={"webview"}
          component={WebViewScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
