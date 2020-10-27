import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Typography from 'components/atoms/Typography';
import Paragraph from 'components/atoms/Paragraph';
import Select from 'components/atoms/Select';

import { platform } from 'constans/options';

const Wrapper = styled.div`
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
  background-color: ${({ theme }) => theme.white};
`;

const NewPost = () => (
  <Container>
    <Typography as="h1">Dodaj nowe ogłoszenie</Typography>
    <Wrapper>
      <Paragraph>
        Platforma
      </Paragraph>
        <Select options={platform} />
    </Wrapper>
  </Container>
);

export default NewPost;