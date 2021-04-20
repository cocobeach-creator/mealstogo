import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import NavigationHOC from "./src/services/navigation/NavigationHOC";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";



export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <NavigationHOC/>
        <ExpoStatusBar style="auto" />
      </Provider>
    </>
  );
}
