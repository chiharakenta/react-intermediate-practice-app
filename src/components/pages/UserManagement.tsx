import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { UserCard } from 'components/organisms/user/UserCard';
import { useAllUsers } from 'hooks/useAllUsers';
import { FC, memo, useEffect } from 'react';

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getUsers(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard imageUrl="https://source.unsplash.com/random/" userName={user.username} fullName={user.name} />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
