import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/selo_public_mui_firebase/.",
	plugins: [react()],
	server: {
		https: {
			key: fs.readFileSync("/home/greatgonthar/localhost-key.pem"),
			cert: fs.readFileSync("/home/greatgonthar/localhost.pem"),
		},
	},
});
