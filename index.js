if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { persistor, store } from "./src/redux/store";

const Main = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  );
};
AppRegistry.registerComponent(appName, () => Main);
