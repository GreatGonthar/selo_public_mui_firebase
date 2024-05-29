import {Stack, IconButton} from "@mui/material";
import SetMealIcon from "@mui/icons-material/SetMeal";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import React from "react";
import { randomText } from "../constants";


const UtilsButtons = ({ setTextValue, setOpenImageModal}) => {

	
	return (		
			<Stack direction={"row"} gap={0} mb={1}>
				<IconButton aria-label="settings" onClick={() => {setOpenImageModal(prev => !prev)}}>
					<AddPhotoAlternateIcon color="primary" />
				</IconButton>
				<IconButton aria-label="settings" onClick={() => setTextValue((prev) => prev + randomText)}>
					<SetMealIcon />
				</IconButton>
				<IconButton aria-label="settings" onClick={() => setTextValue("")}>
					<DeleteIcon />
				</IconButton>
			</Stack>		
	);
};

export default UtilsButtons;
