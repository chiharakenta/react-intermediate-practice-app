import { useLoginUser } from 'hooks/useLoginUser';
import { FC, memo, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Home: FC = memo(() => {
  const { loginUser } = useLoginUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginUser) navigate('/');
  });

  const pathName = useLocation().pathname;
  const isHomePage = pathName === '/home' || pathName === '/home/';
  return isHomePage ? <p>ホームページです。</p> : <Outlet />;
});
