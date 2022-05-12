import axios from 'axios';
import { useState, useCallback } from 'react';
import { User } from 'types/api/User';
import { useMessage } from 'hooks/useMessage';

type Props = {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
};

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: 'ユーザー取得に失敗しました', status: 'error' });
      })
      .finally(() => setLoading(false));
  }, [showMessage]);

  const updateUser = (props: Props, oldUsers: Array<User>) => {
    const newUsers = [...oldUsers];
    const { id, username, name, email, phone } = props;
    const index = id - 1;
    newUsers[index].username = username;
    newUsers[index].name = name;
    newUsers[index].email = email;
    newUsers[index].phone = phone;
    setUsers(newUsers);
  };

  return { getUsers, updateUser, loading, users };
};
