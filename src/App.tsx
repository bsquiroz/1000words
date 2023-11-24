import { useEffect } from "react";

import { Container, ContentButton, ModalWord, Words } from "./components";
import { useStore } from "./store";
import { cn } from "./utils/cn.utility";

export const App = () => {
	const { words, valuesIndexWord, setWordsCurrent } = useStore(
		(state) => state
	);

	useEffect(() => {
		localStorage.setItem(
			"valuesIndexWord",
			JSON.stringify(valuesIndexWord)
		);

		const { endWord, initWord } = valuesIndexWord;

		if (initWord !== 0 && endWord > 10) {
			const wordAux = words.slice(initWord, endWord);
			localStorage.setItem("wordsCurrent", JSON.stringify(wordAux));
			setWordsCurrent(wordAux);
		} else {
			const wordAux = words.slice(0, 10);
			setWordsCurrent(wordAux);
		}
	}, [valuesIndexWord]);

	return (
		<Container>
			<h2 className={cn("font-bold text-end")}>
				Cantidad de palabras: {words.length} palabras
			</h2>
			<ContentButton />
			<Words />
			<ModalWord />
		</Container>
	);
};
