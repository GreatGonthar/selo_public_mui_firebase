import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ContentWithEmoji from "../ContentWithEmoji";

export default function Content({ imageContent, textContent, expanded }) {
	
	return (
		<>
			{imageContent === "" || (
				<CardMedia
					component="img"
					height="300px"
					image={imageContent}
					style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
					alt="Картинка"
				/>
			)}			
			<CardContent sx={{ 
					overflowWrap: "break-word", 
					maxHeight: expanded ? "none" : "5em",
					overflow: 'hidden',
        			position: 'relative',	
					transition: 'max-height 4s ease'									
					}}>
				<Typography variant="body2" color="text.secondary">					
					<ContentWithEmoji text={textContent} />					
				</Typography>
			</CardContent>
		</>
	);
}
