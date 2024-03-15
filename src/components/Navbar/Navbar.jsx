import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TemporaryDrawer from "../Sidebar/TemporaryDrawer";
import NavbarMenu from "./NavbarMenu";

function Navbar() {
	return (
		<AppBar position="sticky">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1 }}>
						<TemporaryDrawer />
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: "flex",
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							fontSize: { xs: 15, md: 30 },
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						Social Network
					</Typography>
					<NavbarMenu />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;
