import * as React from "react";
import {ACQ_SMILE_MASK, BASE_EMOJI_URL} from "./constants";

export default function ContentWithEmoji({ text }) {
	return (
		<>
			{text.split(new RegExp(`(${ACQ_SMILE_MASK}\\d+)`, 'g')).map((part, index) => {
				if (part.startsWith(ACQ_SMILE_MASK)) {
					const number = part.slice(5);
					console.log(BASE_EMOJI_URL(1))
					return (
						<span key={index}>
							<img src="https://www.dmosk.ru/img/qip_smiles/1.gif" />												
						</span>
					);
				} else {
					return(
					 <React.Fragment key={index}>
					{part}
					</React.Fragment>
					)
				}
			})}
		</>
	);
}