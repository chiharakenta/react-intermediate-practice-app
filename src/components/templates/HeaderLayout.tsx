import { Header } from 'components/organisms/layout/Header';
import { FC, memo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
