import React from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import CustomEmojiForEmojiMart from "./CustomEmojiForEmojiMart";
import { ACQ_SMILE_MASK } from "../constants";

import EmojiPicker from "emoji-picker-react";
import { Block } from "@mui/icons-material";

const custom = CustomEmojiForEmojiMart;
const EmojiMartComponent = ({ setTextFieldValue }) => {
	const GifOrSmileFunction = (e) => {
		if (e.native) {
			setTextFieldValue((prev) => prev + e.native);
		} else {
			// setTextFieldValue((prev) => prev + e.native)
			setTextFieldValue((prev) => prev + `${ACQ_SMILE_MASK}${e.id}`);
		}
	};
	return (
		<>
			{/* <EmojiPicker onEmojiClick={(e) => GifOrSmileFunction(e)}/> */}			
				<Picker width={"100px"} data={data} navPosition={"top"} custom={custom} onEmojiSelect={(e) => GifOrSmileFunction(e)} />
			
		</>
	);
};

export default EmojiMartComponent;
