import { Modal, Box, styled, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModalWindowElements from "./ModalWindowElements";

const ModalWindow = ({ openModal, handleCloseModal }) => {
	const MyStyledModal = styled(Modal)({
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		overflow: "auto",
	});

	const UserBox = styled(Box)({
		display: "flex",
		alignItems: "center",
		gap: "10px",
		margin: "12px 2px",
	});	

	return (
		<MyStyledModal open={openModal} onClose={handleCloseModal}>
			<Box width={400} bgcolor={"background.paper"} p={1} borderRadius={5} sx={{ height: "auto", margin: "50% 3px", border: "solid white 1px" }}>
				<UserBox sx={{ justifyContent: "space-between" }}>
					<Typography variant="h6" color="gray" textAlign="center">
						Создать пост
					</Typography>
					<IconButton aria-label="settings" onClick={handleCloseModal}>
						<CloseIcon />
					</IconButton>
				</UserBox>			
					<ModalWindowElements {...{handleCloseModal}}/>			
			</Box>
		</MyStyledModal >
	);
};

export default ModalWindow;
