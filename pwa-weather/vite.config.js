import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const manifestForPlugin = {
	registerType: "prompt",
	includeAssets: ["logo.png"],
	manifest: {
		name: "Weather App",
		short_name: "Weathe App",
		description: "An app that can show weather forecast for your city.",
		icons: [
			{
				src: "/images/logo.png",
				sizes: "192x192",
				type: "image/png",
			},
			
			{
				src: "/images/logo.png",
				sizes: "180x180",
				type: "image/png",
				purpose: "apple touch icon",
			},
			{
				src: "/images/maskable_icon.png",
				sizes: "225x225",
				type: "image/png",
				purpose: "any maskable",
			},
		],
		theme_color: "#171717",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
})
