import * as React from "react";
import { ACQ_SMILE_MASK, BASE_EMOJI_URL, BASE_EMOJI_URL_GOOSE, GOOSE_FILENAME_ARR } from "./constants";

export default function ContentWithEmoji({ text }) {
	return (
		<>
			{text.split(new RegExp(`(${ACQ_SMILE_MASK}\\d+)`, "g")).map((part, index) => {
				if (part.startsWith(ACQ_SMILE_MASK)) {
					const number = part.slice(5);
					return (
						<span key={index}>
							<img src={BASE_EMOJI_URL(number)} />
						</span>
					);
				} else {
					return <React.Fragment key={index}>{part}</React.Fragment>;
				}
			})}
		</>
	);
}
