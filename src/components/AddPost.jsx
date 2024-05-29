import React from "react";
import { Fab, Tooltip } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ModalWindow from "./ModalWindow/ModalWindow";
import ModalWindowElements from "./AddPostModalWindow/ModalWindowElements";
import { useSelector } from "react-redux";
import LoginWindow from "./Navbar/LoginButton/LoginWindow";

const AddPost = () => {
	const [openModal, setOpenModal] = React.useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);
	const userAuth = useSelector((state) => state.authUser);
	return (
		<>
			<Tooltip
				title="Добавить пост"
				sx={{ position: "fixed", bottom: 20, right: { xs: 20, md: "50%" } }}
				placement="top-start"
			>
				<Fab color="primary" aria-label="add" onClick={handleOpenModal}>
					<PostAddIcon />
				</Fab>
			</Tooltip>
			{userAuth.isAuth ? (
				<ModalWindow {...{ openModal, handleCloseModal, title: "создать пост" }}>
					<ModalWindowElements {...{ handleCloseModal }} />
				</ModalWindow>
			) : (
				<ModalWindow {...{ openModal, handleCloseModal, title: "авторизация" }}>
					<LoginWindow {...{ handleCloseModal }} />
				</ModalWindow>
			)}
		</>
	);
};
export default AddPost;

// красного знамени 59, 15.00
