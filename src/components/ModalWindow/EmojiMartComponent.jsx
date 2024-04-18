import React from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import CustomEmojiForEmojiMart from "./CustomEmojiForEmojiMart";
import { ACQ_SMILE_MASK } from "../constants";
import { useTheme } from "@mui/material";

const custom = CustomEmojiForEmojiMart;
const customCategoryIcons = {
	  ICQ: {
		src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Papirus-64-apps-icq.svg',
	  }		
  }
const EmojiMartComponent = ({ setTextValue }) => {
	const theme = useTheme();
	const mode = theme.palette.mode;

	const gifOrSmileFunction = (e) => {
		if (e.native) {
			setTextValue((prev) => prev + e.native);
		} else {			
			setTextValue((prev) => prev + ` ${ACQ_SMILE_MASK}${e.id}`);
		}
	};
	return (
		<>		
				<Picker width={"100px"} data={data} navPosition={"top"} custom={custom} onEmojiSelect={(e) => gifOrSmileFunction(e)} theme={mode} categoryIcons={customCategoryIcons}/>			
		</>
	);
};

export default EmojiMartComponent;
