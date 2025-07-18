'use client'
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import { Provider } from "react-redux";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}