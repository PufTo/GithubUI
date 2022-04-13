import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import "../styles/globals.css";
import store from "../state/index.js";
import { useStore } from "../state/index.js";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  console.log("creating store");
  // const store = useStore(pageProps.initialReduxState);
  // const persistor = persistStore(store, {}, function () {
  //   persistor.persist();
  // });

  return (
    <Provider store={store}>
      <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
