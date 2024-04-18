import { TextField, Card, CardMedia} from "@mui/material";
import React, { useState } from "react";
import SubmitButtons from "./SubmitButtons";
import PickerButton from "./PickerButton";
import UtilsButtons from "./UtilsButtons";
import ImageChangeWindow from "./ImageChangeWindow";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";
import {defaultImage} from "../constants"
import StyledTextField from "./StyledTextField";

const ModalWindowElements = ({ handleCloseModal }) => {
	const imageContent = useSelector((state) => state.postData.imageContent)
	const [openImageModal, setOpenImageModal] = useState(false);
	const [textValue, setTextValue] = useState("");
	const handleTextFieldChange = (event) => {
		setTextValue(event.target.value);
	};

	return (
		<>
			<UtilsButtons {...{setTextValue, setOpenImageModal}}  />
			{!openImageModal && imageContent && <ImageCard imageContent={imageContent}/>}			
			{!openImageModal || <ImageChangeWindow {...{setOpenImageModal}}/>}
			{openImageModal || <StyledTextField	{...{handleTextFieldChange, textValue}}/>}
			<PickerButton setTextValue={setTextValue} />
			<SubmitButtons {...{textValue, setTextValue, handleCloseModal}}/>
		</>
	);
};

export default ModalWindowElements;
