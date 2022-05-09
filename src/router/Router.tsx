import { Home } from 'components/pages/Home';
import { Login } from 'components/pages/Login';
import { Page404 } from 'components/pages/Page404';
import { Setting } from 'components/pages/Setting';
import { UserManagement } from 'components/pages/UserManagement';
import { memo } from 'react';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="user_management" element={<UserManagement />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
});
