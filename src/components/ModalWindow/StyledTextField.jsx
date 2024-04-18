import { TextField} from "@mui/material";

const StyledTextField = ({ handleTextFieldChange, textValue }) => {
	return (
		<>
			 <TextField
				id="outlined-textarea"
				label="Текст поста"
				placeholder="/>"
				multiline
				sx={{ width: "100%" }}
				value={textValue}
				onChange={handleTextFieldChange}
			/>
		</>
	);
};

export default StyledTextField;
