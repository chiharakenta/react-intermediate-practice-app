import { Wrap, WrapItem } from '@chakra-ui/react';
import { UserCard } from 'components/organisms/user/UserCard';
import { FC, memo } from 'react';

export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard imageUrl="https://source.unsplash.com/random/" userName="chihaken" fullName="Kenta Chihara" />
      </WrapItem>
    </Wrap>
  );
});
