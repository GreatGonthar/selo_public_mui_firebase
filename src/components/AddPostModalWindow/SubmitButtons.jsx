import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setFirebasePost, getFirebasePosts } from "../../redux/asyncActions/posts";
import { setImageContent } from "../../redux/reducers/postData";

const SubmitButtons = ({ textValue, setTextValue, handleCloseModal }) => {
	const dispatch = useDispatch();
	const imageContent = useSelector((state) => state.postData.imageContent);
	const submitPost = () => {		
		let post = {
			id: new Date().toString(),
			date: new Date(),
			userName: "User",
			imageContent: imageContent,
			textContent: textValue,
			likes: 14,
		};
		dispatch(setFirebasePost(post));
		// dispatch(getFirebasePosts())
		dispatch(setImageContent(""));
		setTextValue("");
		handleCloseModal();
	};
	const cancelSubmitPost = () => {
		dispatch(setImageContent(""));
		handleCloseModal();
	};
	return (
		<Box sx={{ display: "flex", alignItems: "center", gap: "10px", margin: "12px 2px" }}>
			<Button variant="contained" onClick={submitPost}>
				отправить
			</Button>
			<Button variant="contained" onClick={cancelSubmitPost}>
				Cancel
			</Button>
		</Box>
	);
};

export default SubmitButtons;
