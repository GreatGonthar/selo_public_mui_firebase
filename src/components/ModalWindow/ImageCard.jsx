import { Card, CardMedia } from "@mui/material";
import { defaultImage } from "../constants";

const ImageCard = ({ imageContent }) => {
	return (
		<Card sx={{ mb: 2, p: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
			<CardMedia
				bgcolor={"background.paper"}
				sx={{ minHeight: "100px", minWidth: "100px", width: "auto", display: "inline-block" }}
				component="img"
				height="140"
				image={imageContent}
				alt="изображение"
			/>
		</Card>
	);
};

export default ImageCard;
