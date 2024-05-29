import React from "react";
import { Box, Button, Tooltip } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ModalWindow from "../../ModalWindow/ModalWindow";
import LoginWindow from "./LoginWindow";
import { useDispatch, useSelector } from "react-redux";
import UserSettings from "./UserSettings";
import { setFirebaseUser } from "../../../redux/asyncActions/users";

function LoginButton() {
	const [openModal, setOpenModal] = React.useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);
	const userAuth = useSelector((state) => state.authUser);
	const usersArr = useSelector((state) => state.users);
	const dispatch = useDispatch();
	if (userAuth.isAuth) {
		console.log("данные залогиневшегося юзера взятые из state isAuth", userAuth);
		let exist = usersArr.some((obj) => obj.uid === userAuth.uid);
		console.log("существует ли данный пользователь в state?", exist);
		if (!exist) {
			console.log("такого пользователя нет, сейчас будем его диспатчить", userAuth);
			const { isAuth, ...userWithoutAge } = userAuth;
			dispatch(setFirebaseUser(userWithoutAge));
		}
	}

	return (
		<Box sx={{ flexGrow: 0 }}>
			{console.log("isAuth: ", userAuth.isAuth)}
			{userAuth.isAuth ? (
				<UserSettings {...{ userAuth }} />
			) : (
				<Tooltip title="Login">
					<Button variant="outlined" color="logButton" endIcon={<LoginIcon />} onClick={handleOpenModal}>
						Login
					</Button>
				</Tooltip>
			)}
			<ModalWindow {...{ openModal, handleCloseModal, title: "авторизация" }}>
				<LoginWindow {...{ handleCloseModal }} />
			</ModalWindow>
		</Box>
	);
}

export default LoginButton;
