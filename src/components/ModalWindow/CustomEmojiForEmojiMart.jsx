import { BASE_EMOJI_URL, BASE_EMOJI_URL_GOOSE, GOOSE_FILENAME_ARR } from "../constants";
let count = 281
let CustomEmojiForEmojiMart = [
	{
		id: "ICQ",
		name: "ICQ",
		emojis: [],
	},
	{
		id: "Funky Goose",
		name: "Funky Goose",
		emojis: []
	},
	
];

for (let i = 1; i <= 281; i++) {
	CustomEmojiForEmojiMart[0].emojis.push({
		id: `${i}`,
		name: `name=${i}`,
		keywords: ["icq", "gif"],
		skins: [{ src: BASE_EMOJI_URL(i) }],
	});
}

for (let i = 1; i <= 35; i++) {
	CustomEmojiForEmojiMart[1].emojis.push({
		id: `${count+i}`,
		name: `name=${count+i}`,
		keywords: ["Funky Goose", "webp"],
		skins: [{ src: BASE_EMOJI_URL_GOOSE(i) }],
	});
}

export default CustomEmojiForEmojiMart;
