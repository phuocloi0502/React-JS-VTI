/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/helpers";

const AuthLayout = ({ children, isPublic }) => {
  const isLogin = localStorage.getItem('isLogin')

  if (isPublic && isLogin) {
    return <Navigate to="/" replace />;
  }

  if (!isPublic && !isLogin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default AuthLayout;
