import React, { useState, useEffect } from "react";
import {Card, CardMedia} from "@mui/material";
import { defaultImage } from "../constants";
import StyledImageTextField from "./StyledImageTextField";

const ImageChangeWindow = ({ readClipboard, setOpenImageModal }) => {	
	const [imageURL, setImageURL] = useState("");
	const handleImageFieldChange = (event) => {
		setImageURL(event.target.value);
	};
	async function readClipboard() {
		try {
			const text = await navigator.clipboard.readText();
			setImageURL(text);
		} catch (error) {
			console.log("Ошибка при чтении из буфера обмена:", error);
		}
	}
	useEffect(() => {
		readClipboard();
	}, []);
	const handleError = (event) => {
		event.target.src = defaultImage;		
	};

	return (
		<>
			<Card sx={{ mb: 3, p: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
				<CardMedia
					bgcolor={"background.paper"}
					sx={{ mb: 3, minHeight: "100px", minWidth: "100px", width: "auto", display: "inline-block" }}
					component="img"
					height="140"
					image={imageURL || defaultImage}
					alt="изображение"
					onError={handleError}
				/>
				<StyledImageTextField {...{ imageURL, handleImageFieldChange, readClipboard, setOpenImageModal }} />
			</Card>
		</>
	);
};

export default ImageChangeWindow;
