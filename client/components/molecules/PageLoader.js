import styled from 'styled-components';
import Spinner from 'components/atoms/Spinner';

const PageOverlay = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, .7);
	z-index: 999;
`;

const PageLoader = () => (
	<PageOverlay>
		<Spinner />
	</PageOverlay>
);

export default PageLoader;
