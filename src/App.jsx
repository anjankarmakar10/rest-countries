import ReactDOM from "react-dom/client";
import "./app.css";
import Body from "./components/Body";
import Details from "./pages/Details";
import { Header } from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
