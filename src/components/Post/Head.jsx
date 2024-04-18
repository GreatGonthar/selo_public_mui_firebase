import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function formatDate(milliseconds) {
	const date = new Date(milliseconds);
	const months = [
	  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
	  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
	];
  
	const day = date.getDate().toString().padStart(2, '0');
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
  
	return `${day} ${month} ${year}, ${hours}:${minutes}`;
  }

export default function Head({date, userName}) {
	return (
		<CardHeader
			avatar={
				<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
					R
				</Avatar>
			}
			action={
				<IconButton aria-label="settings">
					<MoreVertIcon />
				</IconButton>
			}
			title={userName}
			subheader={formatDate(date)}
		/>
	);
}
