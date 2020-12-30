import styled from 'styled-components';

const BoxCommon = styled.div`
  height: 50px;
  background: #aaa;
`;

const BoxBig = styled(BoxCommon)`
  width: 200px;
`;

const BoxSmall = styled(BoxCommon)`
  width: 100px;
`;

const Box = ({ size }) => {
  if (size === 'big') {
    return <BoxBig>큰 박스</BoxBig>;
  } else {
    return <BoxSmall>작은 박스</BoxSmall>;
  }
};

export default Box;
