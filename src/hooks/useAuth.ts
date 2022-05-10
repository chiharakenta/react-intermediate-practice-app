import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { User } from 'types/api/User';

export const useAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      const idIsValid = id[0] !== ' ';
      axios
        .get<User | Array<User>>('https://jsonplaceholder.typicode.com/users', {
          params: {
            id: id
          }
        })
        .then((res) => {
          if (res.data && idIsValid) {
            console.log(res);
            navigate('/home');
          } else {
            alert('ユーザーが見つかりません');
          }
        })
        .catch((error) => {
          console.error(error);
          alert('ログインできません');
        })
        .finally(() => setLoading(false));
    },
    [navigate]
  );
  return { login, loading };
};
