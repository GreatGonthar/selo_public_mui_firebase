import {BASE_EMOJI_URL} from "../constants"


let CustomEmojiForEmojiMart = [
	{
		id: 'ICQ',
		name: 'ICQ',
		emojis: []
	}
]

for (let i=1; i<=281 ;i++){
	CustomEmojiForEmojiMart[0].emojis.push(
			  {
				id: `${i}`,
				name: `name=${i}`,
				keywords: ['icq', 'gif'],
				skins: [{ src: BASE_EMOJI_URL(i)}],	
			  }			 	
	)
}

export default CustomEmojiForEmojiMart;
