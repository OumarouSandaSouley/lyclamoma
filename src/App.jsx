import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Home from "./pages/Home";
import ParentDashboard from "./pages/ParentsDashboard";

const Root = () => {
  return (
    <main className="w-full max-w-screen-2xl mx-auto pt-3 bg-white min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
const Dashboard = () => {
  return (
    <main className="w-full max-w-screen-2xl mx-auto pt-3 bg-white min-h-screen">
      <Outlet />
      <Footer />
    </main>
  );
};
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "parents",
          element: <ParentDashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
