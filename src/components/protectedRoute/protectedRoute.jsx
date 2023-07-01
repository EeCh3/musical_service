/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import { Navigate, Outlet  } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = '/login', isAllowed  }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};