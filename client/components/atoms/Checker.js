import styled from 'styled-components';

const Checkbox = styled.label`
  display: inline-flex;
  width: 40px;
  height: auto;
  position: relative;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey200};
  border-radius: 50px;

  &:after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid ${({ theme }) => theme.grey200};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.playstation};
  }
`;

const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  visibility: hidden;
`;

const Checker = () => {
  return (
    <Checkbox>
      <Input />
    </Checkbox>
  );
};

export default Checker;
