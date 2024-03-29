import * as React from "react";
import {ACQ_SMILE_MASK} from "./constants";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ContentWithEmoji from "./ContentWithEmoji"

const contentText = `This impressive paella ${ACQ_SMILE_MASK}120 is a perfect party dish and a along with the mussels, if you like iop. This${ACQ_SMILE_MASK}105impressive paella ${ACQ_SMILE_MASK}104 is a perfect party dish and a along with the mussels, if you like iop.`

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function Post({ myImage }) {
	const [expanded, setExpanded] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const handleTooltipClose = () => {
		setOpen(false);
	};
	const handleTooltipOpen = () => {
		setOpen(true);
	};
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const [textFieldValue, setTextFieldValue] = React.useState('');
	const handleTextFieldChange = (event) => {
		setTextFieldValue(event.target.value);
	  };

	return (
		<Card sx={{ marginY: 2 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
						R
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
			/>
			<CardMedia component="img" height="300px" image={myImage} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} alt="Paella dish" />
			<CardContent>			
				<Typography variant="body2" color="text.secondary">				
					<ContentWithEmoji text={contentText}/>					
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />

        <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip onClose={handleTooltipClose} open={open} disableFocusListener disableHoverListener disableTouchListener title="кнопка не работает" placement="top-end">
					<IconButton aria-label="share" onClick={handleTooltipOpen}>
						<ShareIcon />
					</IconButton>          
				</Tooltip>
        </ClickAwayListener>

				<ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Method:</Typography>
					<Typography paragraph>Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.</Typography>
					<Typography paragraph>
						Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,
						stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo
						in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant,
						about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
					</Typography>
					<Typography paragraph>
						Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is
						<ContentWithEmoji text={contentText}/>
						absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again
						without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
					</Typography>
					<Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
