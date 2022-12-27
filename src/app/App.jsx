import React from "react";
import AppRoutes from "routes";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const PAYPAL_CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;

  return (
    <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID }}>
      <AppRoutes />
    </PayPalScriptProvider>
  );
}

export default App;
