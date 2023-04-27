import { useState } from 'react';
import urlGet from '@/utils/urlGet';

type Props = {};

const index = (props: Props) => {
  const [value, setValue] = useState('');
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    urlGet('https://jsonplaceholder.typicode.com/todos/2', (data) => {
      console.log(data);
    });
  };

  return (
    <div>
      전송 컴포넌트
      <div>전송 컴포넌트</div>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default index;
