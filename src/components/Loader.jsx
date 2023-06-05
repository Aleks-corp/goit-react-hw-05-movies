import { ProgressBar } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Wrapper>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
      />
    </Wrapper>
  );
};
export default Loader;

const Wrapper = styled.div`
  text-align: center;
  align-items: center;
`;
