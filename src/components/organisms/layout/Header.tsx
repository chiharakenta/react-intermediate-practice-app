import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { FC, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MenuIconButton } from 'components/atoms/button/MenuIconButton';
import { MenuDrawer } from 'components/molecules/MenuDrawer';
import { useLoginUser } from 'hooks/useLoginUser';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setLoginUser } = useLoginUser();

  const onClickLogout = useCallback(() => setLoginUser(null), [setLoginUser]);

  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex align="center" mr={8} _hover={{ cursor: 'pointer' }}>
          <Link to="/home">
            <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
              ユーザー管理アプリ
            </Heading>
          </Link>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={2}>
            <Link to="/home/user_management">ユーザー一覧</Link>
          </Box>
          <Box pr={2}>
            <Link to="/home/setting">設定</Link>
          </Box>
          <Box pr={2}>
            <Link to="/" onClick={onClickLogout}>
              ログアウト
            </Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} onClickLogout={onClickLogout} />
    </>
  );
});
