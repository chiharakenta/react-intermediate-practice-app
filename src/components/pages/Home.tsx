import { FC, memo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const Home: FC = memo(() => {
  const pathName = useLocation().pathname;
  const isHomePage = pathName === '/home' || pathName === '/home/';
  return isHomePage ? <p>ホームページです。</p> : <Outlet />;
});
