import React, { useState } from "react";
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setAuthOut } from "../../../redux/reducers/authUser";
import { auth } from "../../../firebase";
import { Logout, PermIdentity, ManageAccounts } from "@mui/icons-material";

function UserSettings({ userAuth }) {
	const [anchorEl, setAnchorEl] = useState(false);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(false);
	};
	const dispatch = useDispatch();
	const exitWithGoogle = async () => {
		await signOut(auth);
		dispatch(setAuthOut());
	};
	return (
		<>
			<IconButton onClick={handleClick}>
				{/* <Tooltip title="User"> */}
				<Avatar alt="Remy Sharp" src={userAuth.photoURL} />
				{/* </Tooltip> */}
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={!!anchorEl}
				onClose={handleClose}
				onClick={handleClose}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem
					onClick={() => {
						console.log(userAuth);
					}}
				>
					<ListItemIcon>
						<PermIdentity fontSize="small" />
					</ListItemIcon>
					info
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<ManageAccounts fontSize="small" />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem onClick={exitWithGoogle}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
}

export default UserSettings;
