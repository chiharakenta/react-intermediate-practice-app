import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from '@chakra-ui/react';
import { PrimaryButton } from 'components/atoms/button/PrimaryButton';
import { useAllUsers } from 'hooks/useAllUsers';
import { ChangeEventHandler, FC, memo, useEffect, useState } from 'react';
import { User } from 'types/api/User';

type Props = {
  user: User | null;
  users: Array<User>;
  isAdmin?: boolean;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, users, isAdmin = false, isOpen, onClose } = props;
  const { updateUser } = useAllUsers();

  const [id, setId] = useState<number | null>(null);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setId(user?.id ?? null);
    setUsername(user?.username ?? '');
    setName(user?.name ?? '');
    setEmail(user?.email ?? '');
    setPhone(user?.phone ?? '');
  }, [user]);

  const onChangeUsername: ChangeEventHandler<HTMLInputElement> = (event) => setUsername(event.target.value);
  const onChangeName: ChangeEventHandler<HTMLInputElement> = (event) => setName(event.target.value);
  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => setEmail(event.target.value);
  const onChangePhone: ChangeEventHandler<HTMLInputElement> = (event) => setPhone(event.target.value);

  const onClickUpdate = () => {
    if (typeof id !== 'number') {
      console.error('id is null');
      return;
    }
    updateUser({ id, username, name, email, phone }, users);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={username} onChange={onChangeUsername} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
