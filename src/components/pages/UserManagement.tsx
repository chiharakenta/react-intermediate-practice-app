import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';
import { UserCard } from 'components/organisms/user/UserCard';
import { UserDetailModal } from 'components/organisms/user/UserDetailModal';
import { useAllUsers } from 'hooks/useAllUsers';
import { useLoginUser } from 'hooks/useLoginUser';
import { useSelectUser } from 'hooks/useSelectUser';
import { FC, memo, useCallback, useEffect } from 'react';

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
      onOpen();
    },
    [onOpen, onSelectUser, users]
  );

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
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random/"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  );
});
