import { useLoginUser } from './useLoginUser';
import { useMessage } from 'hooks/useMessage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { User } from 'types/api/User';

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<Array<User>>(`https://jsonplaceholder.typicode.com/users/`, { params: { id: id } })
        .then((res) => {
          const userIsEmpty = !Object.keys(res.data).length;
          if (!userIsEmpty) {
            const user = res.data[0];
            setLoginUser(user);
            showMessage({ title: 'ログインしました', status: 'success' });
            navigate('/home');
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' });
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          showMessage({ title: 'ログインできません', status: 'error' });
          setLoading(false);
        });
    },
    [navigate, setLoginUser, showMessage]
  );
  return { login, loading };
};
