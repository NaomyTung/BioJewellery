// Author: Naomy Tung
// Version 1
// Date: 18/3/2023

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
	

	const { user } = useSelector(
        (state) => state.auth
    )

	if (user && user.user.type==="Admin") {
		return true;	
	} else {
		return false;
	}
}

const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? 
    <Outlet />
   : (
    <Navigate to="/"/>
  );
};

export {
  ProtectedRoute,
  useAuth,
}