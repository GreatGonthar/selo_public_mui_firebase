import Feed from "./components/Feed";
import Navbar from "./components/Navbar/Navbar";
import AddPost from "./components/DialogWindow/AddPost";

import { Box, Stack } from "@mui/material";

function App() {
	return (
		<Box>
			<Navbar />
			<Stack direction="row" justifyContent="space-between" sx={{ spacing: { xs: 0, md: 5 } }}>								
				<Feed />					
			</Stack>
			<AddPost />
		</Box>
	);
}

export default App;
