import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

import store from "../state/index.js";
import "../styles/globals.css";
import { theme } from "../styles/theme";
import NavBar from "../components/NavBar/NavBar.jsx";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <>
            <NavBar />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
