import React, { Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
const Banner = React.lazy(() => import("./components/Banner"));
const Form = React.lazy(() => import("./components/Form"));

function App() {
  console.log("Api Key = ", process.env.REACT_APP_KEY);
  console.log("Environment = ", process.env.NODE_ENV);
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Banner />
        <Form />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
