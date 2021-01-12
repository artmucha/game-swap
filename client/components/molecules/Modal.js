import styled, { css } from 'styled-components';
import Box from 'components/atoms/Box';

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
	background-color: rgba(0, 0, 0, .8);
	z-index: 999;
	visibility: hidden;
	opacity: 0;
	transition: opacity .2s linear;

	${({ open }) =>
    open &&
    css`
      visibility: visible;
			opacity: 1;
    `}
`;

const ModalContent = styled(Box)`
	padding: 10px;
	max-width: 70%;

	${({ image }) =>
    image &&
    css`
      display: flex;
			padding: 0;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
  `}

	@media(min-width: 768px) {
		${({ image }) =>
    image &&
			css`
				padding: 0;
		`}
	}
`;

const Modal = ({ children, open, setOpen, image }) => (
	<PageOverlay open={open} onClick={() => setOpen(false)}>
		<ModalContent image={image}>
			{children}
		</ModalContent>
	</PageOverlay>
);

export default Modal;
