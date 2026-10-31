'use client'
import { ToastContainer } from "react-toastify";
import { store } from "../store";
import { Provider } from "react-redux";

// No PersistGate: it rendered nothing until localStorage was restored on the client,
// which blanked every server-rendered page until all JavaScript had loaded.
export default function Providers({ children }) {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer />
    </Provider>
  );
}
