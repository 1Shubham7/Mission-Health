import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Entries from "./components/tracker/Entries";
import Footer from "./components/footer/Footer.jsx";
import QuoteOne from "./components/quoteOne/QuoteOne.jsx";
import Me from "./components/me/Me.jsx";
import QuoteTwo from "./components/quoteTwo/QuoteTwo.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Caltech from "./components/caltech/Caltech";

function App() {
  return (
    <>
      <Navbar />
      <Caltech />
      <QuoteOne />
      <Me />
      <QuoteTwo />
      <Entries />
      <Footer />
    </>
  );
}

export default App;
