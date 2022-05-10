import { Home } from 'components/pages/Home';
import { Setting } from 'components/pages/Setting';
import { UserManagement } from 'components/pages/UserManagement';

// type
import { Routes } from 'types/Routes';

export const homeRoutes: Routes = {
  path: `/home`,
  element: <Home />,
  routes: [
    {
      path: `user_management`,
      element: <UserManagement />
    },
    {
      path: `setting`,
      element: <Setting />
    }
  ]
};
