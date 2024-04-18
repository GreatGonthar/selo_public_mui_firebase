import React, { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFirebasePosts } from "../redux/asyncActions/posts";

const Feed = () => {	
	const dispatch = useDispatch()
	const posts = useSelector((state) => state.posts);
	useEffect(() => {
		dispatch(getFirebasePosts());
	}, []);
	return (
		<>
			{posts.length === 0 ? (
				    <Box sx={{ display: 'flex', 
					justifyContent: 'center', 
					alignItems: 'center', 
					height: '100vh',
					width: "100%" }}>
					<CircularProgress size={100}/>
				  </Box>
			) : (
				<Box flex={3} p={1} pb={10} sx={{ maxWidth: "100%" }}>
					{posts.map((elem) => {
						return <Post {...elem} key={elem.id} />;
					})}
				</Box>
			)}
		</>
	);
};

export default Feed;
