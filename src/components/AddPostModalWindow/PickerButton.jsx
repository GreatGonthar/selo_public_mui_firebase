import { Stack, IconButton} from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EmojiMartComponent from "./EmojiMartComponent";
import React, { useState } from "react";

const PickerButton = ({ setTextValue}) => {
	const [isPickerVisible, setIsPickerVisible] = useState(false);	
	return (
		<>	
			<Stack direction={"row"} justifyContent="flex-end">
				<IconButton aria-label="settings" onClick={() => setIsPickerVisible((prev) => !prev)}>
					<SentimentSatisfiedAltIcon color="primary" />
				</IconButton>
			</Stack>
			{isPickerVisible && <EmojiMartComponent setTextValue={setTextValue} />}
			
		</>
	);
};

export default PickerButton;
