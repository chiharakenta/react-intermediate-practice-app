import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickLogout: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { isOpen, onClose, onClickLogout } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="grey.100">
            <Link to="/home">
              <Button onClick={onClose} w="100%" bg="grey.100">
                トップ
              </Button>
            </Link>
            <Link to="/home/user_management">
              <Button onClick={onClose} w="100%" bg="grey.100">
                ユーザー一覧
              </Button>
            </Link>
            <Link to="/home/setting">
              <Button onClick={onClose} w="100%" bg="grey.100">
                設定
              </Button>
            </Link>
            <Link to="/">
              <Button onClick={onClickLogout} w="100%" bg="grey.100">
                ログアウト
              </Button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
