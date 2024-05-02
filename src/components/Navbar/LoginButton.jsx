import React from "react";
import {Box, Button, Tooltip} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import ModalWindow from "../ModalWindow/ModalWindow";

function LoginButton() {
	const [openModal, setOpenModal] = React.useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);
	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title="Login">
				<Button variant="outlined" color="logButton" endIcon={<LoginIcon />} onClick={handleOpenModal}>
					Login
				</Button>
			</Tooltip>
			<ModalWindow {...{openModal, handleCloseModal, title: "войти"}}>
			<LoginIcon />	
			</ModalWindow>
		</Box>
	);
}

export default LoginButton;
