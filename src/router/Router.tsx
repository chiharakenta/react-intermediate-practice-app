import { Login } from 'components/pages/Login';
import { Page404 } from 'components/pages/Page404';
import { HeaderLayout } from 'components/templates/HeaderLayout';
import { memo } from 'react';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { homeRoutes } from 'router/HomeRoutes';

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={homeRoutes.path} element={<HeaderLayout>{homeRoutes.element}</HeaderLayout>}>
          {homeRoutes.routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
});
