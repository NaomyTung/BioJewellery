// @author: Naomy Tung 
// @version: 1.0

// Author: Naomy Tung
// Version 1
// Date: 18/3/2023

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const useAuthU = () => {
	
	const { user } = useSelector(
        (state) => state.auth
    )

	if (user && user.user.type==="Client") {
		return true;	
	} else {
		return false;
	}
}

const ProtectedRouteUser = () => {
  const isAuth = useAuthU();
  return isAuth ? 
    <Outlet />
   : (
    <Navigate to="/"/>
  );
};

export {
  ProtectedRouteUser,
  useAuthU,
}