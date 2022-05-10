import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="grey.100">
            <Button w="100%" bg="grey.100">
              トップ
            </Button>
            <Button w="100%" bg="grey.100">
              ユーザー一覧
            </Button>
            <Button w="100%" bg="grey.100">
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
