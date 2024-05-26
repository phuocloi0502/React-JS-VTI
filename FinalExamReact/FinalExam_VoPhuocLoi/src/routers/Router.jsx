import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/error_page/ErrorPage.jsx";
import { User } from "../pages/user/User.jsx";
import Login from '../pages/login/Login.jsx';
import App from "./../App.jsx"
import AuthLayout from "./AuthLayout.jsx";
import SignUp from "../pages/sign-up/SignUp.jsx";
const router = createBrowserRouter([
  {
    path: '/',
    element:
      <AuthLayout>
        <App />
      </AuthLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <User />,
      },

    ],
  },
  {
    path: '/login',
    element: <AuthLayout isPublic={true}><Login /></AuthLayout>,
  },
  {
    path: '/signup',
    element: <AuthLayout isPublic={true}><SignUp /></AuthLayout>,
  },


]);

export default router;
