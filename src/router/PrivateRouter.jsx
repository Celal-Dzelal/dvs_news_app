import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { email, password } = useSelector((state) => state.yetkiSlice);

  return email === "celal@deneme.com" && password === "1234--" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
