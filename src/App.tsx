import { useEffect } from "react";

import {
	Container,
	ContentButton,
	Header,
	ModalStudyWords,
	ModalWord,
	Words,
} from "./components";

import { useStore } from "./store";

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
			<Header />
			<ContentButton />
			<Words />
			<ModalWord />
			<ModalStudyWords />
		</Container>
	);
};
