import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Container from '../atoms/Container';
import Row from '../atoms/Row';
import SearchForm from '../molecules/SearchForm';
import ButtonIcon from '../atoms/ButtonIcon';
import Menu from '../molecules/Menu';

const Wrapper = styled.header`
  background-color: ${({ platform, theme }) =>
    platform ? theme[platform] : theme.white};
  color: ${({ theme }) => theme.black};
  padding-top: 10px;
`;

const Header = ({ platform }) => {
  return (
    <Wrapper platform={platform}>
      <Container flex spaceBetween alignCenter>
        <h1>Logo</h1>
        <SearchForm />
        <div>
          <Link href='#'>
            <a>Zaloguj</a>
          </Link>
          <ButtonIcon circle colors={['#43A047', '#FFEB3B']}>
            +
          </ButtonIcon>
        </div>
      </Container>
      <Container flex>
        <Menu />
      </Container>
    </Wrapper>
  );
};

Header.propTypes = {
  platform: PropTypes.oneOf(['playstation', 'xbox', 'nintendo', 'pc', 'white']),
};

Header.defaultProps = {
  platform: 'white',
};

export default Header;
