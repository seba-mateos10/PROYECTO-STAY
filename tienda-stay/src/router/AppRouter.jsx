import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Layout } from "../components/layout/Layout";
import { NotFound } from "../components/pages/notFound/NotFound";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
