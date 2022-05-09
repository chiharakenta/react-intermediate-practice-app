import { Login } from 'components/pages/Login';
import { Page404 } from 'components/pages/Page404';
import { memo } from 'react';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { homeRoutes } from 'router/HomeRoutes';

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={homeRoutes.path} element={homeRoutes.element}>
          {homeRoutes.routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
});
