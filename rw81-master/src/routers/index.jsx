import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import AuthLayout from "./AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthLayout>
        <h1>Home Page</h1>
      </AuthLayout>
    ),
  },
  {
    path: "login",
    element: (
      <AuthLayout isPublic>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: "product",
    element: <h1>Product Page</h1>,
  },
]);

export default router;
