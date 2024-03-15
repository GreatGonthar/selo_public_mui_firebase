import React from "react";
import { Fab, Tooltip, Modal, Box, styled, Typography,  Button, IconButton } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CloseIcon from "@mui/icons-material/Close";
import DialogWindowElements from "./DialogWindowElements"

const AddPost = () => {
	const [openModal, setOpenModal] = React.useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

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
		<div>			
			<Tooltip title="Добавить пост" sx={{ position: "fixed", bottom: 20, right: { xs: 20, md: "50%" } }} placement="top-start">
				<Fab color="primary" aria-label="add" onClick={handleOpenModal}>
					<PostAddIcon />
				</Fab>
			</Tooltip>
			<MyStyledModal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box width={400} bgcolor="white" p={1} borderRadius={5} sx={{ height: "auto", margin: "50% 3px" }}>
					<UserBox sx={{ justifyContent: "space-between" }}>
						<Typography variant="h6" color="gray" textAlign="center">
							Создать пост
						</Typography>
						<IconButton aria-label="settings" onClick={handleCloseModal}>
							<CloseIcon />
						</IconButton>
					</UserBox>
				
					<DialogWindowElements/>
					<UserBox>
						<Button variant="contained">OK</Button>
						<Button variant="contained">Cancel</Button>
					</UserBox>				
				</Box>
			</MyStyledModal>
		</div>
	);
};



export default AddPost;
