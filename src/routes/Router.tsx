import Login from "../pages/login/Login";
import { Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  const authRouteList = [
    {
      path: "/login",
      element: <Login />,
    },
  ];
  return (
    <>
      <Routes>
        {authRouteList.map((authRoute, index: number) => (
          <Route
            key={index}
            path={authRoute.path}
            element={authRoute.element}
          />
        ))}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};

export default Router;
