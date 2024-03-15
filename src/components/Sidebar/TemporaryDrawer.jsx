import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled, useTheme } from "@mui/material/styles";
import list from "./list";

export default function TemporaryDrawer() {
	const [state, setState] = React.useState(false);
	const DrawerHeader = styled("div")(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	}));
	return (
		<>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={() => setState(true)}
				color="inherit">
				<MenuIcon />
			</IconButton>

			<Drawer anchor="left" open={state} onClose={() => setState(false)}>
				<DrawerHeader>
					<IconButton onClick={() => setState(false)}>
						<ChevronLeftIcon />
					</IconButton>
				</DrawerHeader>
				<Divider />
				{list()}
			</Drawer>
		</>
	);
}
