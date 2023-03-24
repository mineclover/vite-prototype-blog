import { Outlet } from 'react-router-dom';

interface Props {}

const index = (props: Props) => {
  return (
    <div>
      index
      <Outlet />
    </div>
  );
};

export default index;
