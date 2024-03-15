import { TextField, Stack, IconButton, InputAdornment } from "@mui/material";
import SetMealIcon from "@mui/icons-material/SetMeal";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EmojiMartComponent from "./EmojiMartComponent";

import React from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const DialogWindowElements = () => {
	const [isPickerVisible, setIsPickerVisible] = React.useState(false);
	const [textFieldValue, setTextFieldValue] = React.useState("");
	const handleTextFieldChange = (event) => {
		setTextFieldValue(event.target.value);
	};
	return (
		<>
			<Stack direction={"row"} gap={0} mb={1}>
				<IconButton aria-label="settings">
					<ImageIcon color="primary" />
				</IconButton>
				<IconButton aria-label="settings">
					<VideoCameraBackIcon color="secondary" />
				</IconButton>
				<IconButton aria-label="settings" onClick={() => setTextFieldValue((prev) => prev + generateRandomText(50))}>
					<SetMealIcon />
				</IconButton>
				<IconButton aria-label="settings" onClick={() => setTextFieldValue("")}>
					<DeleteIcon />
				</IconButton>
			</Stack>
			<TextField
				id="outlined-textarea"
				label="Текст поста"
				placeholder="/>"
				multiline
				sx={{ width: "100%" }}
				value={textFieldValue}				
				onChange={handleTextFieldChange}
			/>


			<IconButton aria-label="settings" onClick={() => setIsPickerVisible((prev) => !prev)}>
				<SentimentSatisfiedAltIcon color="primary" />
			</IconButton>			
			{isPickerVisible && <EmojiMartComponent setTextFieldValue={setTextFieldValue} />}
		</>
	);
};

function generateRandomText(length) {
	let randomText = "";
	const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
		randomText += possibleCharacters[randomIndex];
	}
	return randomText;
}

export default DialogWindowElements;
