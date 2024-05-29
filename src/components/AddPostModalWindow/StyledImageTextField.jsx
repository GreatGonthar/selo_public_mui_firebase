import { Stack, TextField, styled, InputAdornment, IconButton } from "@mui/material";
import { orange } from "@mui/material/colors";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { setImageContent } from "../../redux/reducers/postData";
import { useDispatch } from 'react-redux'

const MyStyledTextField = styled(TextField)({
	"& .MuiInputBase-input": {
		padding: "4px 4px",
	},
	"& .MuiInputLabel-root": {
		top: "-11px",
	},
	"& .MuiInputLabel-shrink": {
		top: "0px",
	},
	"& .MuiInputBase-root": {
		paddingRight: "4px",
	},
});
const StyledImageTextField = ({imageURL, handleImageFieldChange, readClipboard, setOpenImageModal}) => {
	const dispatch = useDispatch()
	const addStateImage = () => {
		dispatch(setImageContent(imageURL))
		setOpenImageModal(false)
	}
	return (
		<>
			<MyStyledTextField
				id="outlined-basic"
				variant="outlined"
				label="URL изображения"
				placeholder="/>"
				value={imageURL}
				onChange={handleImageFieldChange}
				sx={{ width: "100%" }}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end" gap={1}>
							<Stack direction={"row"}>
								<IconButton aria-label="settings" onClick={readClipboard}>
									<ContentPasteIcon sx={{ color: orange[500] }} />
								</IconButton>
								<IconButton
									aria-label="settings"
									onClick={addStateImage}>
									<AttachFileIcon />
								</IconButton>
							</Stack>
						</InputAdornment>
					),
				}}
			/>
		</>
	);
};

export default StyledImageTextField;
