import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return <section>indexsssssss</section>;
};

export default App;

const LearnRoot = styled.section``;
