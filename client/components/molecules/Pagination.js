import styled from 'styled-components';

const StyledPagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
	width: 100%;
	max-width: 400px;
	margin: 30px auto 0 auto;

	li {

		a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 32px;
			height: 32px;
			padding-top: 3px;
			margin: 0 10px;
			border-radius: 50%;
			text-align: center;
			font-size: ${({ theme }) => theme.fontSize.s};
			font-weight: ${({ theme }) => theme.bold};
		}
		&:nth-of-type(3) {
			a {
				background: linear-gradient(60deg,#0072ff,#00c6ff);
				box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.15);
				color: ${({ theme }) => theme.white};
			}
		}
	}

`;

const Pagination = ({}) => {
  return (
    <StyledPagination>
      <li>
          <a>1</a>
      </li>
      <li>
          <a>2</a>
      </li>
      <li>
          <a>3</a>
      </li>
      <li>
          <a>4</a>
      </li>
    </StyledPagination>
  );
};

export default Pagination;