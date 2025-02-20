import "./App.css"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import React, { lazy, Suspense } from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import Navbar from "./component/Navbar";
import Body from "./component/Body";
import About from "./component/About";
// import Grocery from "./component/Grocery";
import Contact from "./component/Contact";
import Menu from "./component/Menu";
import Footer from "./component/Footer";
import Error from "./component/Error";
import Login from "./component/Login";
const Grocery = lazy(() => import("./component/Grocery"))
import GrocerySimmer from "./component/GrocerySimmer";
import { userConetext } from "./utils/userContext";
import ShowCartIems from "./component/ShowCartitems";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Better variable name
  const [loginusername, SetLoginusername] = useState("")

  const handleLogin = (status, loginuser) => {
    setIsLoggedIn(status);
    SetLoginusername(loginuser)
  };


  return isLoggedIn ? (
    <div className="flex flex-col min-h-screen"> {/* Ensures footer stays at bottom */}
      <Provider store={appStore}>
        <userConetext.Provider value={{ defaultUser: loginusername }}>
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer /> {/* Stays at the bottom */}
        </userConetext.Provider>
      </Provider>
    </div>
  ) : (
    <Login data={handleLogin} />
  );
};


const appRoutes = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "/",
    element: <Body />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/grocery",
    element: <Suspense fallback={<GrocerySimmer />}>
      <Grocery />
    </Suspense>
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/cartpage",
    element: <ShowCartIems />
  },
  {
    path: "/restaurant/:resId",
    element: <Menu />
  }],
  errorElement: <Error />
}]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />)
