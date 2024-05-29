import Feed from "./components/Feed";
import Navbar from "./components/Navbar/Navbar";
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import AddPost from "./components/AddPost";
import { useEffect, useState } from "react";
import { getFirebaseUsers } from "./redux/asyncActions/users";
import { useDispatch } from "react-redux";

function createMyTheme(mode) {
	return createTheme({
		palette: {
			logButton: {
				main: "#ffffff",
			},
			mode,
			...(mode === "light"
				? {
						background: {
							default: "silver",
						},
				  }
				: {
						// Для темной темы используем стандартные цвета Material-UI
				  }),
		},
	});
}

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getFirebaseUsers());
	}, []);
	const [mode, setMode] = useState("light");
	const [blya, setBlya] = useState(false);
	const theme = createMyTheme(mode);

	return (
		<ThemeProvider theme={theme}>
			<Box bgcolor={"background.default"}>
				<Navbar {...{ mode, setMode, blya, setBlya }} />
				<Stack direction="row" justifyContent="space-between">
					{/* <Feed /> */}
				</Stack>
				<AddPost />
			</Box>
		</ThemeProvider>
	);
}

export default App;
