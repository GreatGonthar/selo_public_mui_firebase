import React from "react";
import { Box, Container, Button, Stack, Paper } from "@mui/material";
import Post from "./Post";

const Feed = () => {
	return (
		<Box sx={{ bgcolor: "silver"}} flex={3} p={1}>
			<Post myImage="https://omskzdes.ru/storage/c/2021/09/15/1631700161_979398_71.jpg" />
			<Post myImage="https://pm1.aminoapps.com/6788/972f8452024c17ee6e9cf287893c1ee4ef2a4920v2_00.jpg" />
			<Post myImage="https://img3.labirint.ru/rc/119a03780065d1ef946631419016e255/363x561q80/books82/812927/cover.jpg?1625747409" />
			<Post myImage="https://litinteres.ru/wp-content/uploads/2023/05/women-model-portrait-long-hair-photography-fashion-hair-Emma-Watson-spring-girl-beauty-eye-woman-lady-hairstyle-portrait-photography-photo-shoot-brown-hair-40989-scaled.jpg" />
			<Post myImage="https://n1s1.hsmedia.ru/03/79/16/037916502b78c0923fce5fe9accfa3d1/600x600_1_d10e4f69b4942d4922f83b622798842d@1200x1200_0xac120003_6754236431667221623.png" />
		</Box>
	);
};

export default Feed;
