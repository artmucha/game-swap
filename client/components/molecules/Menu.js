import styled from 'styled-components';
import Link from 'next/link';
import menu from '../../constans/menu';

const NavigationList = styled.ul`
  display: flex;

  li {
    position: relative;

    &:hover {
      background-color: ${({ theme }) => theme.grey100};
      ul {
        display: block;
      }
    }
  }

  a,
  span {
    display: inline-block;
    padding: 10px 15px;
    cursor: pointer;
    color: ${({ theme }) => theme.black};
    font-weight: ${({ theme }) => theme.bold};
  }
`;

const NavigationSubList = styled.ul`
  display: none;
  position: absolute;
  top: 35px;
  left: 0;
  min-width: 220px;
  box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.1);
  z-index: 99;
  transition: all linear 0.2s;

  a {
    display: block;
    padding: 10px 15px;
    cursor: pointer;
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.white};
    font-weight: ${({ theme }) => theme.bold};
    border-bottom: 1px solid ${({ theme }) => theme.grey200};

    &:hover {
      background-color: ${({ theme }) => theme.grey100};
    }
  }
`;

const Menu = () => {
  return (
    <nav>
      <NavigationList>
        {menu.map(({ text, link, sub, platform }) => (
          <li>
            {link ? (
              <Link href={`/ogloszenia/${platform}/${link}`}>
                <a>{text}</a>
              </Link>
            ) : (
              <span>{text}</span>
            )}

            {sub ? (
              <NavigationSubList>
                {sub.map(({text, link, platform}) => (
                  <li>
                    <Link href={`/ogloszenia/${platform}/${link}`}>
                      <a>{text}</a>
                    </Link>
                  </li>
                ))}
              </NavigationSubList>
            ) : null}
          </li>
        ))}
      </NavigationList>
    </nav>
  );
};

export default Menu;
