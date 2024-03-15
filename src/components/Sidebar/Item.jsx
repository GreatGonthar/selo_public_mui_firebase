import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ModeNightIcon from '@mui/icons-material/ModeNight';
const Item = ({icon,text}) => {
	return (
				<ListItem  disablePadding>
					<ListItemButton>
						<ListItemIcon>
							{icon}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				</ListItem>				
	);
};

export default Item;
