import * as React from "react";
import Card from "@mui/material/Card";
import Head from "./Head";
import Content from "./Content";
import ActionButtons from "./ActionButtons";

export default function Post({ date = 0, userName = "", imageContent = "", textContent = "", likes = 0, id = 0 }) {
	if (date.seconds) {
		date = date.seconds * 1000;
	}
	const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded((prev) => !prev);
	};
	return (
		<Card sx={{ marginY: 2 }}>
			<Head {...{ date, userName }} />
			<Content {...{ imageContent, textContent, expanded }} />
			<ActionButtons {...{ likes, id, handleExpandClick, expanded }} />
		</Card>
	);
}
