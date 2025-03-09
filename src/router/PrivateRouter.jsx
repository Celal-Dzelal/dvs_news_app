import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = useSelector((state) => state.yetkiSlice.user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
