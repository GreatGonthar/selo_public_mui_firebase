import * as React from "react";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import Favorite from "@mui/icons-material/Favorite";
import { Tooltip, Typography, Button } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useDispatch } from "react-redux";
import { dellFirebasePost } from "../../redux/asyncActions/posts";
import CircularProgress from "@mui/material/CircularProgress";

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

export default function ActionButtons({ handleExpandClick, expanded, likes, id }) {
	const [open, setOpen] = React.useState(false);
	const [dellLoader, setDellLoader] = React.useState(false);
	const dispatch = useDispatch();
	const handleTooltipClose = () => {
		setOpen(false);
	};
	const handleTooltipOpen = () => {
		setOpen(true);
	};
	const handleDeletePost = () => {
		if (!dellLoader){
			dispatch(dellFirebasePost(id));
			setDellLoader(true)
		}
	};
	return (
		<>
			<CardActions disableSpacing>
				<IconButton sx={{ color: "red" }}>
					<Favorite />
					<Typography variant="body1">{likes}</Typography>
				</IconButton>

				<ClickAwayListener onClickAway={handleTooltipClose}>
					<Tooltip
						onClose={handleTooltipClose}
						open={open}
						disableFocusListener
						disableHoverListener
						disableTouchListener
						title="кнопка не работает"
						placement="top-end">
						<IconButton aria-label="share" onClick={handleTooltipOpen}>
							<ShareIcon />
						</IconButton>
					</Tooltip>
				</ClickAwayListener>

				<IconButton onClick={handleDeletePost}>
				{dellLoader ? <CircularProgress size={20} /> : <DeleteIcon />}										
				</IconButton>

				<ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
		</>
	);
}
