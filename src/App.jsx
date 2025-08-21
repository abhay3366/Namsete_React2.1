import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import News from "./components/News";
import Error from "./components/Error";
import ResturantMenuPage from "./components/ResturantMenuPage";
import { lazy, Suspense } from "react";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";

const Grocerry=lazy(()=>import("./components/Grocerry"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/news",
        element: <News />,
      },
       {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocerry",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Grocerry />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <ResturantMenuPage />,
      },
    ],
    errorElement: <Error />,
  },
]);


const App = () => {
   return (
    <>
      <RouterProvider router={appRouter} />
      <ToastContainer />
    </>
  );
};

export default App;
