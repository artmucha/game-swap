import { useRouter } from "next/router";
import styled, { css } from 'styled-components';

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
			cursor: pointer;
			font-size: ${({ theme }) => theme.fontSize.s};
			font-weight: ${({ theme }) => theme.bold};
		}

		${({ currentPage }) =>
    currentPage &&
    css`
      &:nth-of-type(${currentPage}) {
				a {
					background: linear-gradient(60deg,#0072ff,#00c6ff);
					color: ${({ theme }) => theme.white};
				}
			}
    `}
	}
`;

const Pagination = ({initialPage, currentPage, totalPages}) => {
	const router = useRouter();

  const handlePagination = (page) => {
    const path = router.pathname;
		const query = router.query;

    query.page = page + 1;
    router.push({
      pathname: path,
      query: query,
		});
	};

	const paginationList = [...Array(totalPages).keys()];
	
  return (
    <StyledPagination currentPage={currentPage}>
      { paginationList.length > 1 && paginationList.map(item => (
				<li key={item}>
					<a onClick={() => handlePagination(item)}>{item + 1}</a>
				</li>
			)) }
    </StyledPagination>
  );
};

export default Pagination;