import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserStore } from "../../store/useStore";
import PropTypes from "prop-types";
const ProtectedRoute = (props) => {
  const user = useUserStore((state) => state.user);
  const location = useLocation();
  return props.allowedRoles.includes(user?.role)
  ? <Outlet /> 
  : user ? <Navigate to="/unauthorized" state={{from: location}} replace /> 
  : <Navigate to="/login" state={{ from: location }} replace />
  
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.array,
};

export default ProtectedRoute;
