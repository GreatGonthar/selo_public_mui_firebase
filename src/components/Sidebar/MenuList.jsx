import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import MailIcon from "@mui/icons-material/Mail";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { FormControlLabel, Switch } from "@mui/material";
import Item from "./Item";
// сделать так, чтобы при выборе элемента меню, оно темнело
const MenuList = ({ mode, setMode }) => {
	const block1 = ["Inbox", "Starred", "Send email", "Drafts"];
	const block2 = ["All mail", "Trash", "Spam"];
	return (
		<>
			<Box sx={{ width: "100%", pr: 5 }} role="presentation" onClick={() => console.log("iop")} onKeyDown={() => console.log("poi")}>
				<List>
					{block1.map((text, index) => (
						<Item icon={index % 2 === 0 ? <InboxIcon /> : <MailIcon />} text={text} key={text} />
					))}
				</List>
				<Divider />
				<List>
					{block2.map((text, index) => (
						<Item icon={index % 2 === 0 ? <InboxIcon /> : <MailIcon />} text={text} key={text} />
					))}
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
								
							</ListItemIcon>
							<Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<FormControlLabel value="blya" control={<Switch color="primary" />} label="бля режим" labelPlacement="start" color="text.secondary" />
					</ListItem>
				</List>
			</Box>
		</>
	);
};

export default MenuList;
