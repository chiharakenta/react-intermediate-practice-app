import { useMessage } from 'hooks/useMessage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { User } from 'types/api/User';

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      const idIsValid = id[0] !== ' ';
      axios
        .get<User | Array<User>>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data && idIsValid) {
            showMessage({ title: 'ログインしました', status: 'success' });
            navigate('/home');
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' });
          }
        })
        .catch((error) => {
          showMessage({ title: 'ログインできません', status: 'error' });
        })
        .finally(() => setLoading(false));
    },
    [navigate, showMessage]
  );
  return { login, loading };
};
