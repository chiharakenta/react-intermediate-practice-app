import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const Page404: FC = memo(() => {
  const navigate = useNavigate();
  const onClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <div>
      <p>404ページです。</p>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
});
