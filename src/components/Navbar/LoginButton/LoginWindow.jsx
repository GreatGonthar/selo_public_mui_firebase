import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GoogleIconSvg from "./GoogleIconSvg";
import { auth } from "../../../firebase";
import { getUserGoogleAccount } from "../../../redux/asyncActions/authUsers";
import { useDispatch, useSelector } from "react-redux";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { getFirebaseUsers } from "../../../redux/asyncActions/users";

function LoginWindow({ handleCloseModal }) {
	const dispatch = useDispatch();

	const infoWithGoogle = () => {
		handleCloseModal();
	};
	const loginWithGoogle = () => {
		dispatch(getUserGoogleAccount());

		handleCloseModal();
	};
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "flex-end",
				width: "100%",
				pb: "40px",
			}}
		>
			<Button variant="outlined" startIcon={<GoogleIcon />} onClick={loginWithGoogle}>
				Войти через аккаунт Google
			</Button>
			<Typography variant="h6" color="gray" textAlign="center" sx={{ pb: "15px", pt: "15px" }}>
				или
			</Typography>
			<Button variant="contained" onClick={infoWithGoogle}>
				данные пользователя
			</Button>
		</Box>
	);
}

export default LoginWindow;
